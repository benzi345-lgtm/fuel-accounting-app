// Authentication Module
const Auth = {
    currentUser: null,
    currentProfile: null,

    async signIn(email, password) {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        this.currentUser = data.user;
        await this.loadProfile();
        return data;
    },

    async signOut() {
        await supabaseClient.auth.signOut();
        this.currentUser = null;
        this.currentProfile = null;
    },

    async loadProfile() {
        if (!this.currentUser) return;
        const { data, error } = await supabaseClient
            .from('user_profiles')
            .select('*')
            .eq('id', this.currentUser.id)
            .single();

        if (error || !data) {
            // First login — auto-create profile
            // Check if any admin exists; first user becomes admin
            const { data: admins } = await supabaseClient
                .from('user_profiles')
                .select('id')
                .eq('role', 'admin')
                .limit(1);

            const isFirstUser = !admins || admins.length === 0;
            const role = isFirstUser ? 'admin' : 'entry';

            const { data: newProfile } = await supabaseClient
                .from('user_profiles')
                .insert({
                    id: this.currentUser.id,
                    email: this.currentUser.email,
                    display_name: this.currentUser.email.split('@')[0],
                    role: role,
                })
                .select()
                .single();

            this.currentProfile = newProfile;

            if (isFirstUser) {
                setTimeout(() => {
                    if (typeof showToast === 'function')
                        showToast('คุณเป็นผู้ใช้คนแรก — ตั้งค่าเป็นผู้ดูแลระบบอัตโนมัติ', 'success');
                }, 1500);
            }
        } else {
            this.currentProfile = data;
        }
    },

    isAdmin() {
        return this.currentProfile && this.currentProfile.role === 'admin';
    },

    isLoggedIn() {
        return !!this.currentUser;
    },

    getDisplayName() {
        if (this.currentProfile && this.currentProfile.display_name) return this.currentProfile.display_name;
        if (this.currentUser && this.currentUser.email) return this.currentUser.email;
        return '';
    },

    async checkSession() {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            this.currentUser = session.user;
            await this.loadProfile();
            return true;
        }
        return false;
    },
};
