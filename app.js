// ===== REFERENCE DATA =====
const REF = {
    stations: [
        { id: 'ST01', name: 'ทองอยู่โฮลดิ้ง', businessName: 'บริษัท ทองอยู่โฮลดิ้ง จำกัด', taxId: '0 3355 6800 0341', address: '349 หมู่ที่ 5 ต.หนองครก อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
        { id: 'ST02', name: 'ทองอยู่โฮลดิ้ง สาขา 4', businessName: 'บริษัท ทองอยู่โฮลดิ้ง จำกัด สาขา 4', taxId: '0 3355 6800 0341', address: '419 หมู่ที่ 1 ต.หนองครก อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
        { id: 'ST03', name: 'ทองอยู่โฮลดิ้ง สาขา 5', businessName: 'บริษัท ทองอยู่โฮลดิ้ง จำกัด สาขา 5', taxId: '0 3355 6800 0341', address: '137 หมู่ที่ 4 ต.ซำ อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
        { id: 'ST04', name: 'ทีวีเอส ออยล์', businessName: 'ห้างหุ้นส่วนจำกัด ที.วี.เอส.ออยล์(สาขา1)', taxId: '0 3335 4500 0912', address: '239 หมู่ที่ 7 ต.หนองไผ่ อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
        { id: 'ST05', name: 'นิภาปิโตรเลียม', businessName: 'บริษัท นิภาปิโตรเลียม จำกัด', taxId: '0 3355 5600 0074', address: '189 หมู่ที่ 1 ต.หนองครก อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
        { id: 'ST06', name: 'ธงชัยปิโตรเลียม', businessName: 'ห้างหุ้นส่วนจำกัด ธงชัยปิโตรเลี่ยม', taxId: '0 3335 3700 1051', address: '166 หมู่ที่ 1 ต.หนองครก อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
        { id: 'ST07', name: 'ธารกรปิโตรเลียม', businessName: 'ห้างหุ้นส่วนจำกัด ธารกรปิโตรเลียม', taxId: '0 3335 4500 0131', address: '26 หมู่ที่ 8 ต.น้ำคำ อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
        { id: 'ST08', name: 'ธนิดาสะพานขาว', businessName: 'ห้างหุ้นส่วนจำกัด ธนิดาสะพานขาว', taxId: '0 3335 4300 0079', address: '58/1 หมู่ที่ 11 ต.หญ้าปล้อง อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
        { id: 'ST09', name: 'ดาวบุณยเกียรติ', businessName: 'ห้างหุ้นส่วนจำกัด ดาวบุณยเกียรติ', taxId: '0 3335 4300 0087', address: '254 หมู่ที่ 5 ต.หนองครก อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
        { id: 'ST10', name: 'ดาวหนองตะมะ', businessName: 'ห้างหุ้นส่วนจำกัด ดาวหนองตะมะ', taxId: '0 3335 3800 0104', address: '149 หมู่ที่ 7 ถนนศรีสะเกษ-อุบล ต.โพธิ์ อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
        { id: 'ST11', name: 'ศรีสะเกษแสงอรุณ', businessName: 'บริษัท ศรีสะเกษแสงอรุณ จำกัด', taxId: '0 3355 3300 0035', address: '389 หมู่ที่ 6 ต.โพนข่า อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
        { id: 'ST12', name: 'ศรีสะเกษทวีชัย', businessName: 'ห้างหุ้นส่วนจำกัด ศรีสะเกษทวีชัย', taxId: '0 3335 4700 0073', address: '175 หมู่ที่ 4 ต.ขะยูง อ.อุทุมพรพิสัย จ.ศรีสะเกษ 33120' },
        { id: 'ST13', name: 'ทวีคูณออยล์', businessName: 'ห้างหุ้นส่วนจำกัด ทวีคูณออยล์', taxId: '0 3435 4600 0479', address: '119 หมู่ที่ 7 ต.หนองครก อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
        { id: 'ST14', name: 'ศรีสะเกษดาวนิภา', businessName: 'ห้างหุ้นส่วนจำกัด ศรีสะเกษดาวนิภา', taxId: '0 3335 4500 0513', address: '83 หมู่ที่ 6 ต.โพธิ์ อ.เมืองศรีสะเกษ จ.ศรีสะเกษ 33000' },
    ],
    staff: [
        { id: 'S01', name: 'ขวัญ' },
        { id: 'S02', name: 'เบญ' },
        { id: 'S03', name: 'มิลค์' },
        { id: 'S04', name: 'ลัก' },
        { id: 'S05', name: 'เร' },
        { id: 'S06', name: 'หนา' },
        { id: 'S07', name: 'มิว' },
        { id: 'S08', name: 'เปิ้ล' },
        { id: 'S09', name: 'ปู' },
        { id: 'S10', name: 'ผู้ใช้ชั่วคราว' },
    ],
    tanks: [
        { key: 'ST01-D-01', stationId: 'ST01', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 15000 },
        { key: 'ST01-D-02', stationId: 'ST01', fuelType: 'Diesel', label: 'ถังดีเซล (2)', capacity: 15000 },
        { key: 'ST01-D-03', stationId: 'ST01', fuelType: 'Diesel', label: 'ถังดีเซล (8+10)', capacity: 30000 },
        { key: 'ST01-G95-01', stationId: 'ST01', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 10000 },
        { key: 'ST01-G95-02', stationId: 'ST01', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (2)', capacity: 10000 },
        { key: 'ST01-G95-03', stationId: 'ST01', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (ก)', capacity: 10000 },
        { key: 'ST01-B95-01', stationId: 'ST01', fuelType: 'Benzyne 95', label: 'ถังเบนซิน 95 (1)', capacity: 10000 },
        { key: 'ST01-G91-01', stationId: 'ST01', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 10000 },
        { key: 'ST02-LPG-01', stationId: 'ST02', fuelType: 'LPG', label: 'ถังแอลพีจี (1)', capacity: 0 },
        { key: 'ST03-D-01', stationId: 'ST03', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 15000 },
        { key: 'ST03-G95-01', stationId: 'ST03', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 5000 },
        { key: 'ST03-G91-01', stationId: 'ST03', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 1000 },
        { key: 'ST04-D-01', stationId: 'ST04', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 30000 },
        { key: 'ST04-D-02', stationId: 'ST04', fuelType: 'Diesel', label: 'ถังดีเซล (2)', capacity: 30000 },
        { key: 'ST04-D-03', stationId: 'ST04', fuelType: 'Diesel', label: 'ถังดีเซล (3)', capacity: 15000 },
        { key: 'ST04-E20-01', stationId: 'ST04', fuelType: 'E 20', label: 'ถัง E20 (1)', capacity: 15000 },
        { key: 'ST04-DP-01', stationId: 'ST04', fuelType: 'Diesel premium', label: 'ถังดีเซลพรีเมี่ยม (1)', capacity: 15000 },
        { key: 'ST04-G95-01', stationId: 'ST04', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 15000 },
        { key: 'ST04-G95P-01', stationId: 'ST04', fuelType: 'Gasohol 95 P', label: 'ถังแก๊ส 95 พรีเมี่ยม (1)', capacity: 15000 },
        { key: 'ST04-G91-01', stationId: 'ST04', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 15000 },
        { key: 'ST05-D-01', stationId: 'ST05', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 30000 },
        { key: 'ST05-D-02', stationId: 'ST05', fuelType: 'Diesel', label: 'ถังดีเซล (2)', capacity: 30000 },
        { key: 'ST05-E20-01', stationId: 'ST05', fuelType: 'E 20', label: 'ถัง E20 (1)', capacity: 15000 },
        { key: 'ST05-DP-01', stationId: 'ST05', fuelType: 'Diesel premium', label: 'ถังดีเซลพรีเมี่ยม (1)', capacity: 15000 },
        { key: 'ST05-G95-01', stationId: 'ST05', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 15000 },
        { key: 'ST05-G91-01', stationId: 'ST05', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 15000 },
        { key: 'ST06-D-01', stationId: 'ST06', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 30000 },
        { key: 'ST06-D-02', stationId: 'ST06', fuelType: 'Diesel', label: 'ถังดีเซล (2)', capacity: 15000 },
        { key: 'ST06-D-03', stationId: 'ST06', fuelType: 'Diesel', label: 'ถังดีเซล (3)', capacity: 15000 },
        { key: 'ST06-G95-01', stationId: 'ST06', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 15000 },
        { key: 'ST06-DP-01', stationId: 'ST06', fuelType: 'Diesel premium', label: 'ถังดีเซลพรีเมี่ยม (1)', capacity: 15000 },
        { key: 'ST06-G91-01', stationId: 'ST06', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 15000 },
        { key: 'ST06-E20-01', stationId: 'ST06', fuelType: 'E 20', label: 'ถัง E20 (1)', capacity: 15000 },
        { key: 'ST07-D-01', stationId: 'ST07', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 15000 },
        { key: 'ST07-D-02', stationId: 'ST07', fuelType: 'Diesel', label: 'ถังดีเซล (2)', capacity: 10000 },
        { key: 'ST07-G95-01', stationId: 'ST07', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 15000 },
        { key: 'ST07-G95P-01', stationId: 'ST07', fuelType: 'Gasohol 95 P', label: 'ถังแก๊ส 95 พรีเมี่ยม (1)', capacity: 15000 },
        { key: 'ST07-G91-01', stationId: 'ST07', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 15000 },
        { key: 'ST07-E20-01', stationId: 'ST07', fuelType: 'E 20', label: 'ถัง E20 (1)', capacity: 10000 },
        { key: 'ST08-D-01', stationId: 'ST08', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 30000 },
        { key: 'ST08-D-02', stationId: 'ST08', fuelType: 'Diesel', label: 'ถังดีเซล (2)', capacity: 15000 },
        { key: 'ST08-G91-01', stationId: 'ST08', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 15000 },
        { key: 'ST08-G95-01', stationId: 'ST08', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 15000 },
        { key: 'ST08-B95-01', stationId: 'ST08', fuelType: 'Benzyne 95', label: 'ถังเบนซิน 95 (1)', capacity: 15000 },
        { key: 'ST08-E20-01', stationId: 'ST08', fuelType: 'E 20', label: 'ถัง E20 (1)', capacity: 15000 },
        { key: 'ST08-DP-01', stationId: 'ST08', fuelType: 'Diesel premium', label: 'ถังดีเซลพรีเมี่ยม (1)', capacity: 15000 },
        { key: 'ST09-D-01', stationId: 'ST09', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 30000 },
        { key: 'ST09-D-02', stationId: 'ST09', fuelType: 'Diesel', label: 'ถังดีเซล (2)', capacity: 10000 },
        { key: 'ST09-B95-01', stationId: 'ST09', fuelType: 'Benzyne 95', label: 'ถังเบนซิน 95 (1)', capacity: 10000 },
        { key: 'ST09-B95-02', stationId: 'ST09', fuelType: 'Benzyne 95', label: 'ถังเบนซิน 95 (2)', capacity: 10000 },
        { key: 'ST09-E20-01', stationId: 'ST09', fuelType: 'E 20', label: 'ถัง E20 (1)', capacity: 10000 },
        { key: 'ST09-G95-01', stationId: 'ST09', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 10000 },
        { key: 'ST09-G91-01', stationId: 'ST09', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 10000 },
        { key: 'ST10-D-01', stationId: 'ST10', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 15000 },
        { key: 'ST10-E20-01', stationId: 'ST10', fuelType: 'E 20', label: 'ถัง E20 (1)', capacity: 15000 },
        { key: 'ST10-DP-01', stationId: 'ST10', fuelType: 'Diesel premium', label: 'ถังดีเซลพรีเมี่ยม (1)', capacity: 15000 },
        { key: 'ST10-G91-01', stationId: 'ST10', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 15000 },
        { key: 'ST10-G95-01', stationId: 'ST10', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 15000 },
        { key: 'ST11-D-01', stationId: 'ST11', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 20000 },
        { key: 'ST11-D-02', stationId: 'ST11', fuelType: 'Diesel', label: 'ถังดีเซล (2)', capacity: 20000 },
        { key: 'ST11-DP-01', stationId: 'ST11', fuelType: 'Diesel premium', label: 'ถังดีเซลพรีเมี่ยม (1)', capacity: 10000 },
        { key: 'ST11-E20-01', stationId: 'ST11', fuelType: 'E 20', label: 'ถัง E20 (1)', capacity: 10000 },
        { key: 'ST11-G91-01', stationId: 'ST11', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 15000 },
        { key: 'ST11-G95-01', stationId: 'ST11', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 15000 },
        { key: 'ST11-B95-01', stationId: 'ST11', fuelType: 'Benzyne 95', label: 'ถังเบนซิน 95 (1)', capacity: 15000 },
        { key: 'ST12-D-01', stationId: 'ST12', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 10000 },
        { key: 'ST12-D-02', stationId: 'ST12', fuelType: 'Diesel', label: 'ถังดีเซล (2)', capacity: 10000 },
        { key: 'ST12-G91-01', stationId: 'ST12', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 10000 },
        { key: 'ST12-G95-02', stationId: 'ST12', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 10000 },
        { key: 'ST12-E20-01', stationId: 'ST12', fuelType: 'E 20', label: 'ถัง E20 (1)', capacity: 10000 },
        { key: 'ST12-B95-01', stationId: 'ST12', fuelType: 'Benzyne 95', label: 'ถังเบนซิน 95 (1)', capacity: 10000 },
        { key: 'ST12-LPG-01', stationId: 'ST12', fuelType: 'LPG', label: 'ถังแอลพีจี (1)', capacity: 0 },
        { key: 'ST13-D-01', stationId: 'ST13', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 20000 },
        { key: 'ST13-B95-01', stationId: 'ST13', fuelType: 'Benzyne 95', label: 'ถังเบนซิน 95 (1)', capacity: 15000 },
        { key: 'ST13-G91-01', stationId: 'ST13', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 15000 },
        { key: 'ST13-G95-01', stationId: 'ST13', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 15000 },
        { key: 'ST13-E20-01', stationId: 'ST13', fuelType: 'E 20', label: 'ถัง E20 (1)', capacity: 15000 },
        { key: 'ST14-D-01', stationId: 'ST14', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 15000 },
        { key: 'ST14-G91-01', stationId: 'ST14', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 5000 },
    ],
    meters: [
        { id: 'M001', tankKey: 'ST01-D-01', label: 'มือจ่าย 1' },
        { id: 'M002', tankKey: 'ST01-D-01', label: 'มือจ่าย 2' },
        { id: 'M003', tankKey: 'ST01-D-01', label: 'มือจ่าย 3' },
        { id: 'M004', tankKey: 'ST01-D-01', label: 'มือจ่าย 4' },
        { id: 'M005', tankKey: 'ST01-D-01', label: 'มือจ่าย 5' },
        { id: 'M006', tankKey: 'ST01-D-01', label: 'มือจ่าย 6' },
        { id: 'M007', tankKey: 'ST01-D-02', label: 'มือจ่าย 1' },
        { id: 'M008', tankKey: 'ST01-D-02', label: 'มือจ่าย 2' },
        { id: 'M009', tankKey: 'ST01-D-02', label: 'มือจ่าย 3' },
        { id: 'M010', tankKey: 'ST01-D-02', label: 'มือจ่าย 4' },
        { id: 'M011', tankKey: 'ST01-D-02', label: 'มือจ่าย 5' },
        { id: 'M012', tankKey: 'ST01-D-02', label: 'มือจ่าย 6' },
        { id: 'M013', tankKey: 'ST01-D-03', label: 'มือจ่าย 1' },
        { id: 'M014', tankKey: 'ST01-D-03', label: 'มือจ่าย 2' },
        { id: 'M015', tankKey: 'ST01-D-03', label: 'มือจ่าย 3' },
        { id: 'M016', tankKey: 'ST01-D-03', label: 'มือจ่าย 4' },
        { id: 'M017', tankKey: 'ST01-D-03', label: 'มือจ่าย 5' },
        { id: 'M018', tankKey: 'ST01-D-03', label: 'มือจ่าย 6' },
        { id: 'M019', tankKey: 'ST01-G95-01', label: 'มือจ่าย 1' },
        { id: 'M020', tankKey: 'ST01-G95-01', label: 'มือจ่าย 2' },
        { id: 'M021', tankKey: 'ST01-G95-01', label: 'มือจ่าย 3' },
        { id: 'M022', tankKey: 'ST01-G95-01', label: 'มือจ่าย 4' },
        { id: 'M023', tankKey: 'ST01-G95-02', label: 'มือจ่าย 1' },
        { id: 'M024', tankKey: 'ST01-G95-02', label: 'มือจ่าย 2' },
        { id: 'M025', tankKey: 'ST01-G95-02', label: 'มือจ่าย 3' },
        { id: 'M026', tankKey: 'ST01-G95-02', label: 'มือจ่าย 4' },
        { id: 'M027', tankKey: 'ST01-G95-03', label: 'มือจ่าย 1' },
        { id: 'M028', tankKey: 'ST01-G95-03', label: 'มือจ่าย 2' },
        { id: 'M029', tankKey: 'ST01-G95-03', label: 'มือจ่าย 3' },
        { id: 'M030', tankKey: 'ST01-G95-03', label: 'มือจ่าย 4' },
        { id: 'M031', tankKey: 'ST01-B95-01', label: 'มือจ่าย 1' },
        { id: 'M032', tankKey: 'ST01-B95-01', label: 'มือจ่าย 2' },
        { id: 'M033', tankKey: 'ST01-G91-01', label: 'มือจ่าย 1' },
        { id: 'M034', tankKey: 'ST01-G91-01', label: 'มือจ่าย 2' },
        { id: 'M035', tankKey: 'ST01-G91-01', label: 'มือจ่าย 3' },
        { id: 'M036', tankKey: 'ST01-G91-01', label: 'มือจ่าย 4' },
        { id: 'M279', tankKey: 'ST01-G91-01', label: 'มือจ่าย 5' },
        { id: 'M037', tankKey: 'ST02-LPG-01', label: 'มือจ่าย 1' },
        { id: 'M038', tankKey: 'ST02-LPG-01', label: 'มือจ่าย 2' },
        { id: 'M039', tankKey: 'ST02-LPG-01', label: 'มือจ่าย 3' },
        { id: 'M040', tankKey: 'ST02-LPG-01', label: 'มือจ่าย 4' },
        { id: 'M041', tankKey: 'ST02-LPG-01', label: 'มือจ่าย 5' },
        { id: 'M042', tankKey: 'ST02-LPG-01', label: 'มือจ่าย 6' },
        { id: 'M043', tankKey: 'ST03-D-01', label: 'มือจ่าย 1' },
        { id: 'M044', tankKey: 'ST03-D-01', label: 'มือจ่าย 2' },
        { id: 'M045', tankKey: 'ST03-D-01', label: 'มือจ่าย 3' },
        { id: 'M046', tankKey: 'ST03-D-01', label: 'มือจ่าย 4' },
        { id: 'M047', tankKey: 'ST03-G95-01', label: 'มือจ่าย 1' },
        { id: 'M048', tankKey: 'ST03-G95-01', label: 'มือจ่าย 2' },
        { id: 'M049', tankKey: 'ST03-G95-01', label: 'มือจ่าย 3' },
        { id: 'M050', tankKey: 'ST03-G95-01', label: 'มือจ่าย 4' },
        { id: 'M051', tankKey: 'ST03-G91-01', label: 'มือจ่าย 1' },
        { id: 'M052', tankKey: 'ST03-G91-01', label: 'มือจ่าย 2' },
        { id: 'M053', tankKey: 'ST03-G91-01', label: 'มือจ่าย 3' },
        { id: 'M054', tankKey: 'ST03-G91-01', label: 'มือจ่าย 4' },
        { id: 'M055', tankKey: 'ST04-D-01', label: 'มือจ่าย 1' },
        { id: 'M056', tankKey: 'ST04-D-01', label: 'มือจ่าย 2' },
        { id: 'M057', tankKey: 'ST04-D-01', label: 'มือจ่าย 3' },
        { id: 'M058', tankKey: 'ST04-D-01', label: 'มือจ่าย 4' },
        { id: 'M059', tankKey: 'ST04-D-01', label: 'มือจ่าย 5' },
        { id: 'M060', tankKey: 'ST04-D-01', label: 'มือจ่าย 6' },
        { id: 'M061', tankKey: 'ST04-D-02', label: 'มือจ่าย 1' },
        { id: 'M062', tankKey: 'ST04-D-02', label: 'มือจ่าย 2' },
        { id: 'M063', tankKey: 'ST04-D-02', label: 'มือจ่าย 3' },
        { id: 'M064', tankKey: 'ST04-D-02', label: 'มือจ่าย 4' },
        { id: 'M065', tankKey: 'ST04-D-03', label: 'มือจ่าย 1' },
        { id: 'M066', tankKey: 'ST04-D-03', label: 'มือจ่าย 2' },
        { id: 'M067', tankKey: 'ST04-E20-01', label: 'มือจ่าย 1' },
        { id: 'M068', tankKey: 'ST04-E20-01', label: 'มือจ่าย 2' },
        { id: 'M069', tankKey: 'ST04-E20-01', label: 'มือจ่าย 3' },
        { id: 'M070', tankKey: 'ST04-E20-01', label: 'มือจ่าย 4' },
        { id: 'M071', tankKey: 'ST04-E20-01', label: 'มือจ่าย 5' },
        { id: 'M072', tankKey: 'ST04-E20-01', label: 'มือจ่าย 6' },
        { id: 'M073', tankKey: 'ST04-DP-01', label: 'มือจ่าย 1' },
        { id: 'M074', tankKey: 'ST04-DP-01', label: 'มือจ่าย 2' },
        { id: 'M075', tankKey: 'ST04-G95-01', label: 'มือจ่าย 1' },
        { id: 'M076', tankKey: 'ST04-G95-01', label: 'มือจ่าย 2' },
        { id: 'M077', tankKey: 'ST04-G95-01', label: 'มือจ่าย 3' },
        { id: 'M078', tankKey: 'ST04-G95-01', label: 'มือจ่าย 4' },
        { id: 'M079', tankKey: 'ST04-G95-01', label: 'มือจ่าย 5' },
        { id: 'M080', tankKey: 'ST04-G95-01', label: 'มือจ่าย 6' },
        { id: 'M081', tankKey: 'ST04-G95P-01', label: 'มือจ่าย 1' },
        { id: 'M082', tankKey: 'ST04-G95P-01', label: 'มือจ่าย 2' },
        { id: 'M083', tankKey: 'ST04-G95P-01', label: 'มือจ่าย 3' },
        { id: 'M084', tankKey: 'ST04-G95P-01', label: 'มือจ่าย 4' },
        { id: 'M085', tankKey: 'ST04-G91-01', label: 'มือจ่าย 1' },
        { id: 'M086', tankKey: 'ST04-G91-01', label: 'มือจ่าย 2' },
        { id: 'M087', tankKey: 'ST04-G91-01', label: 'มือจ่าย 3' },
        { id: 'M088', tankKey: 'ST04-G91-01', label: 'มือจ่าย 4' },
        { id: 'M089', tankKey: 'ST04-G91-01', label: 'มือจ่าย 5' },
        { id: 'M090', tankKey: 'ST04-G91-01', label: 'มือจ่าย 6' },
        // ST05 นิภาปิโตรเลียม (28 meters)
        { id: 'M091', tankKey: 'ST05-D-01', label: 'มือจ่าย 1' },
        { id: 'M092', tankKey: 'ST05-D-01', label: 'มือจ่าย 2' },
        { id: 'M093', tankKey: 'ST05-D-01', label: 'มือจ่าย 3' },
        { id: 'M094', tankKey: 'ST05-D-01', label: 'มือจ่าย 4' },
        { id: 'M095', tankKey: 'ST05-D-01', label: 'มือจ่าย 5' },
        { id: 'M096', tankKey: 'ST05-D-01', label: 'มือจ่าย 6' },
        { id: 'M097', tankKey: 'ST05-D-02', label: 'มือจ่าย 1' },
        { id: 'M098', tankKey: 'ST05-D-02', label: 'มือจ่าย 2' },
        { id: 'M099', tankKey: 'ST05-D-02', label: 'มือจ่าย 3' },
        { id: 'M100', tankKey: 'ST05-D-02', label: 'มือจ่าย 4' },
        { id: 'M101', tankKey: 'ST05-D-02', label: 'มือจ่าย 5' },
        { id: 'M102', tankKey: 'ST05-D-02', label: 'มือจ่าย 6' },
        { id: 'M103', tankKey: 'ST05-E20-01', label: 'มือจ่าย 1' },
        { id: 'M104', tankKey: 'ST05-E20-01', label: 'มือจ่าย 2' },
        { id: 'M105', tankKey: 'ST05-E20-01', label: 'มือจ่าย 3' },
        { id: 'M106', tankKey: 'ST05-E20-01', label: 'มือจ่าย 4' },
        { id: 'M107', tankKey: 'ST05-DP-01', label: 'มือจ่าย 1' },
        { id: 'M108', tankKey: 'ST05-DP-01', label: 'มือจ่าย 2' },
        { id: 'M109', tankKey: 'ST05-G95-01', label: 'มือจ่าย 1' },
        { id: 'M110', tankKey: 'ST05-G95-01', label: 'มือจ่าย 2' },
        { id: 'M111', tankKey: 'ST05-G95-01', label: 'มือจ่าย 3' },
        { id: 'M112', tankKey: 'ST05-G95-01', label: 'มือจ่าย 4' },
        { id: 'M113', tankKey: 'ST05-G91-01', label: 'มือจ่าย 1' },
        { id: 'M114', tankKey: 'ST05-G91-01', label: 'มือจ่าย 2' },
        { id: 'M115', tankKey: 'ST05-G91-01', label: 'มือจ่าย 3' },
        { id: 'M116', tankKey: 'ST05-G91-01', label: 'มือจ่าย 4' },
        { id: 'M117', tankKey: 'ST05-G91-01', label: 'มือจ่าย 5' },
        { id: 'M118', tankKey: 'ST05-G91-01', label: 'มือจ่าย 6' },
        // ST06 ธงชัยปิโตรเลียม (24 meters)
        { id: 'M119', tankKey: 'ST06-D-01', label: 'มือจ่าย 1' },
        { id: 'M120', tankKey: 'ST06-D-01', label: 'มือจ่าย 2' },
        { id: 'M121', tankKey: 'ST06-D-01', label: 'มือจ่าย 3' },
        { id: 'M122', tankKey: 'ST06-D-01', label: 'มือจ่าย 4' },
        { id: 'M123', tankKey: 'ST06-D-02', label: 'มือจ่าย 1' },
        { id: 'M124', tankKey: 'ST06-D-02', label: 'มือจ่าย 2' },
        { id: 'M125', tankKey: 'ST06-D-03', label: 'มือจ่าย 1' },
        { id: 'M126', tankKey: 'ST06-D-03', label: 'มือจ่าย 2' },
        { id: 'M127', tankKey: 'ST06-G95-01', label: 'มือจ่าย 1' },
        { id: 'M128', tankKey: 'ST06-G95-01', label: 'มือจ่าย 2' },
        { id: 'M129', tankKey: 'ST06-G95-01', label: 'มือจ่าย 3' },
        { id: 'M130', tankKey: 'ST06-G95-01', label: 'มือจ่าย 4' },
        { id: 'M131', tankKey: 'ST06-G95-01', label: 'มือจ่าย 5' },
        { id: 'M132', tankKey: 'ST06-G95-01', label: 'มือจ่าย 6' },
        { id: 'M133', tankKey: 'ST06-DP-01', label: 'มือจ่าย 1' },
        { id: 'M134', tankKey: 'ST06-DP-01', label: 'มือจ่าย 2' },
        { id: 'M135', tankKey: 'ST06-G91-01', label: 'มือจ่าย 1' },
        { id: 'M136', tankKey: 'ST06-G91-01', label: 'มือจ่าย 2' },
        { id: 'M137', tankKey: 'ST06-G91-01', label: 'มือจ่าย 3' },
        { id: 'M138', tankKey: 'ST06-G91-01', label: 'มือจ่าย 4' },
        { id: 'M139', tankKey: 'ST06-E20-01', label: 'มือจ่าย 1' },
        { id: 'M140', tankKey: 'ST06-E20-01', label: 'มือจ่าย 2' },
        { id: 'M141', tankKey: 'ST06-E20-01', label: 'มือจ่าย 3' },
        { id: 'M142', tankKey: 'ST06-E20-01', label: 'มือจ่าย 4' },
        // ST07 ธารกรปิโตรเลียม (24 meters)
        { id: 'M143', tankKey: 'ST07-D-01', label: 'มือจ่าย 1' },
        { id: 'M144', tankKey: 'ST07-D-01', label: 'มือจ่าย 2' },
        { id: 'M145', tankKey: 'ST07-D-01', label: 'มือจ่าย 3' },
        { id: 'M146', tankKey: 'ST07-D-01', label: 'มือจ่าย 4' },
        { id: 'M147', tankKey: 'ST07-D-01', label: 'มือจ่าย 5' },
        { id: 'M148', tankKey: 'ST07-D-01', label: 'มือจ่าย 6' },
        { id: 'M149', tankKey: 'ST07-D-02', label: 'มือจ่าย 1' },
        { id: 'M150', tankKey: 'ST07-D-02', label: 'มือจ่าย 2' },
        { id: 'M151', tankKey: 'ST07-D-02', label: 'มือจ่าย 3' },
        { id: 'M152', tankKey: 'ST07-D-02', label: 'มือจ่าย 4' },
        { id: 'M153', tankKey: 'ST07-G95-01', label: 'มือจ่าย 1' },
        { id: 'M154', tankKey: 'ST07-G95-01', label: 'มือจ่าย 2' },
        { id: 'M155', tankKey: 'ST07-G95-01', label: 'มือจ่าย 3' },
        { id: 'M156', tankKey: 'ST07-G95-01', label: 'มือจ่าย 4' },
        { id: 'M157', tankKey: 'ST07-G95P-01', label: 'มือจ่าย 1' },
        { id: 'M158', tankKey: 'ST07-G95P-01', label: 'มือจ่าย 2' },
        { id: 'M159', tankKey: 'ST07-G95P-01', label: 'มือจ่าย 3' },
        { id: 'M160', tankKey: 'ST07-G95P-01', label: 'มือจ่าย 4' },
        { id: 'M161', tankKey: 'ST07-G91-01', label: 'มือจ่าย 1' },
        { id: 'M162', tankKey: 'ST07-G91-01', label: 'มือจ่าย 2' },
        { id: 'M163', tankKey: 'ST07-G91-01', label: 'มือจ่าย 3' },
        { id: 'M164', tankKey: 'ST07-G91-01', label: 'มือจ่าย 4' },
        { id: 'M165', tankKey: 'ST07-E20-01', label: 'มือจ่าย 1' },
        { id: 'M166', tankKey: 'ST07-E20-01', label: 'มือจ่าย 2' },
        // ST08 ธนิดาสะพานขาว (18 meters)
        { id: 'M167', tankKey: 'ST08-D-01', label: 'มือจ่าย 1' },
        { id: 'M168', tankKey: 'ST08-D-01', label: 'มือจ่าย 2' },
        { id: 'M169', tankKey: 'ST08-D-01', label: 'มือจ่าย 3' },
        { id: 'M170', tankKey: 'ST08-D-01', label: 'มือจ่าย 4' },
        { id: 'M171', tankKey: 'ST08-D-02', label: 'มือจ่าย 1' },
        { id: 'M172', tankKey: 'ST08-D-02', label: 'มือจ่าย 2' },
        { id: 'M173', tankKey: 'ST08-G91-01', label: 'มือจ่าย 1' },
        { id: 'M174', tankKey: 'ST08-G91-01', label: 'มือจ่าย 2' },
        { id: 'M175', tankKey: 'ST08-G91-01', label: 'มือจ่าย 3' },
        { id: 'M176', tankKey: 'ST08-G91-01', label: 'มือจ่าย 4' },
        { id: 'M177', tankKey: 'ST08-G95-01', label: 'มือจ่าย 1' },
        { id: 'M178', tankKey: 'ST08-G95-01', label: 'มือจ่าย 2' },
        { id: 'M179', tankKey: 'ST08-B95-01', label: 'มือจ่าย 1' },
        { id: 'M180', tankKey: 'ST08-B95-01', label: 'มือจ่าย 2' },
        { id: 'M181', tankKey: 'ST08-E20-01', label: 'มือจ่าย 1' },
        { id: 'M182', tankKey: 'ST08-E20-01', label: 'มือจ่าย 2' },
        { id: 'M183', tankKey: 'ST08-DP-01', label: 'มือจ่าย 1' },
        { id: 'M184', tankKey: 'ST08-DP-01', label: 'มือจ่าย 2' },
        // ST09 ดาวบุณยเกียรติ (10 meters)
        { id: 'M185', tankKey: 'ST09-D-01', label: 'มือจ่าย 1' },
        { id: 'M186', tankKey: 'ST09-D-01', label: 'มือจ่าย 2' },
        { id: 'M187', tankKey: 'ST09-D-01', label: 'มือจ่าย 3' },
        { id: 'M188', tankKey: 'ST09-D-02', label: 'มือจ่าย 1' },
        { id: 'M189', tankKey: 'ST09-B95-01', label: 'มือจ่าย 1' },
        { id: 'M190', tankKey: 'ST09-B95-01', label: 'มือจ่าย 2' },
        { id: 'M191', tankKey: 'ST09-B95-02', label: 'มือจ่าย 1' },
        { id: 'M192', tankKey: 'ST09-E20-01', label: 'ไม่มีมิเตอร์' },
        { id: 'M193', tankKey: 'ST09-G95-01', label: 'มือจ่าย 1' },
        { id: 'M194', tankKey: 'ST09-G91-01', label: 'มือจ่าย 1' },
        // ST10 ดาวหนองตะมะ (24 meters)
        { id: 'M195', tankKey: 'ST10-D-01', label: 'มือจ่าย 1' },
        { id: 'M196', tankKey: 'ST10-D-01', label: 'มือจ่าย 2' },
        { id: 'M197', tankKey: 'ST10-D-01', label: 'มือจ่าย 3' },
        { id: 'M198', tankKey: 'ST10-D-01', label: 'มือจ่าย 4' },
        { id: 'M199', tankKey: 'ST10-D-01', label: 'มือจ่าย 5' },
        { id: 'M200', tankKey: 'ST10-D-01', label: 'มือจ่าย 6' },
        { id: 'M201', tankKey: 'ST10-E20-01', label: 'มือจ่าย 1' },
        { id: 'M202', tankKey: 'ST10-E20-01', label: 'มือจ่าย 2' },
        { id: 'M203', tankKey: 'ST10-E20-01', label: 'มือจ่าย 3' },
        { id: 'M204', tankKey: 'ST10-E20-01', label: 'มือจ่าย 4' },
        { id: 'M205', tankKey: 'ST10-DP-01', label: 'มือจ่าย 1' },
        { id: 'M206', tankKey: 'ST10-DP-01', label: 'มือจ่าย 2' },
        { id: 'M207', tankKey: 'ST10-G91-01', label: 'มือจ่าย 1' },
        { id: 'M208', tankKey: 'ST10-G91-01', label: 'มือจ่าย 2' },
        { id: 'M209', tankKey: 'ST10-G91-01', label: 'มือจ่าย 3' },
        { id: 'M210', tankKey: 'ST10-G91-01', label: 'มือจ่าย 4' },
        { id: 'M211', tankKey: 'ST10-G91-01', label: 'มือจ่าย 5' },
        { id: 'M212', tankKey: 'ST10-G91-01', label: 'มือจ่าย 6' },
        { id: 'M213', tankKey: 'ST10-G91-01', label: 'มือจ่าย 7' },
        { id: 'M214', tankKey: 'ST10-G91-01', label: 'มือจ่าย 8' },
        { id: 'M215', tankKey: 'ST10-G95-01', label: 'มือจ่าย 1' },
        { id: 'M216', tankKey: 'ST10-G95-01', label: 'มือจ่าย 2' },
        { id: 'M217', tankKey: 'ST10-G95-01', label: 'มือจ่าย 3' },
        { id: 'M218', tankKey: 'ST10-G95-01', label: 'มือจ่าย 4' },
        // ST11 ศรีสะเกษแสงอรุณ (24 meters)
        { id: 'M219', tankKey: 'ST11-D-01', label: 'มือจ่าย 1' },
        { id: 'M220', tankKey: 'ST11-D-01', label: 'มือจ่าย 2' },
        { id: 'M221', tankKey: 'ST11-D-01', label: 'มือจ่าย 3' },
        { id: 'M222', tankKey: 'ST11-D-01', label: 'มือจ่าย 4' },
        { id: 'M223', tankKey: 'ST11-D-02', label: 'มือจ่าย 1' },
        { id: 'M224', tankKey: 'ST11-D-02', label: 'มือจ่าย 2' },
        { id: 'M225', tankKey: 'ST11-DP-01', label: 'มือจ่าย 1' },
        { id: 'M226', tankKey: 'ST11-DP-01', label: 'มือจ่าย 2' },
        { id: 'M227', tankKey: 'ST11-E20-01', label: 'มือจ่าย 1' },
        { id: 'M228', tankKey: 'ST11-E20-01', label: 'มือจ่าย 2' },
        { id: 'M229', tankKey: 'ST11-E20-01', label: 'มือจ่าย 3' },
        { id: 'M230', tankKey: 'ST11-E20-01', label: 'มือจ่าย 4' },
        { id: 'M231', tankKey: 'ST11-G91-01', label: 'มือจ่าย 1' },
        { id: 'M232', tankKey: 'ST11-G91-01', label: 'มือจ่าย 2' },
        { id: 'M233', tankKey: 'ST11-G91-01', label: 'มือจ่าย 3' },
        { id: 'M234', tankKey: 'ST11-G91-01', label: 'มือจ่าย 4' },
        { id: 'M235', tankKey: 'ST11-G91-01', label: 'มือจ่าย 5' },
        { id: 'M236', tankKey: 'ST11-G91-01', label: 'มือจ่าย 6' },
        { id: 'M237', tankKey: 'ST11-G95-01', label: 'มือจ่าย 1' },
        { id: 'M238', tankKey: 'ST11-G95-01', label: 'มือจ่าย 2' },
        { id: 'M239', tankKey: 'ST11-G95-01', label: 'มือจ่าย 3' },
        { id: 'M240', tankKey: 'ST11-G95-01', label: 'มือจ่าย 4' },
        { id: 'M241', tankKey: 'ST11-B95-01', label: 'มือจ่าย 1' },
        { id: 'M242', tankKey: 'ST11-B95-01', label: 'มือจ่าย 2' },
        // ST12 ศรีสะเกษทวีชัย (16 meters)
        { id: 'M243', tankKey: 'ST12-D-01', label: 'มือจ่าย 1' },
        { id: 'M244', tankKey: 'ST12-D-01', label: 'มือจ่าย 2' },
        { id: 'M245', tankKey: 'ST12-D-02', label: 'มือจ่าย 1' },
        { id: 'M246', tankKey: 'ST12-D-02', label: 'มือจ่าย 2' },
        { id: 'M247', tankKey: 'ST12-G91-01', label: 'มือจ่าย 1' },
        { id: 'M248', tankKey: 'ST12-G91-01', label: 'มือจ่าย 2' },
        { id: 'M249', tankKey: 'ST12-G95-02', label: 'มือจ่าย 1' },
        { id: 'M250', tankKey: 'ST12-G95-02', label: 'มือจ่าย 2' },
        { id: 'M251', tankKey: 'ST12-E20-01', label: 'มือจ่าย 1' },
        { id: 'M252', tankKey: 'ST12-E20-01', label: 'มือจ่าย 2' },
        { id: 'M253', tankKey: 'ST12-B95-01', label: 'มือจ่าย 1' },
        { id: 'M254', tankKey: 'ST12-B95-01', label: 'มือจ่าย 2' },
        { id: 'M255', tankKey: 'ST12-LPG-01', label: 'มือจ่าย 1' },
        { id: 'M256', tankKey: 'ST12-LPG-01', label: 'มือจ่าย 2' },
        { id: 'M257', tankKey: 'ST12-LPG-01', label: 'มือจ่าย 3' },
        { id: 'M258', tankKey: 'ST12-LPG-01', label: 'มือจ่าย 4' },
        // ST13 ทวีคูณออยล์ (13 meters)
        { id: 'M259', tankKey: 'ST13-D-01', label: 'มือจ่าย 1' },
        { id: 'M260', tankKey: 'ST13-D-01', label: 'มือจ่าย 2' },
        { id: 'M261', tankKey: 'ST13-D-01', label: 'มือจ่าย 3' },
        { id: 'M262', tankKey: 'ST13-D-01', label: 'มือจ่าย 4' },
        { id: 'M263', tankKey: 'ST13-B95-01', label: 'มือจ่าย 1' },
        { id: 'M264', tankKey: 'ST13-B95-01', label: 'มือจ่าย 2' },
        { id: 'M265', tankKey: 'ST13-G91-01', label: 'มือจ่าย 1' },
        { id: 'M266', tankKey: 'ST13-G91-01', label: 'มือจ่าย 2' },
        { id: 'M267', tankKey: 'ST13-G91-01', label: 'มือจ่าย 3' },
        { id: 'M268', tankKey: 'ST13-G95-01', label: 'มือจ่าย 1' },
        { id: 'M269', tankKey: 'ST13-G95-01', label: 'มือจ่าย 2' },
        { id: 'M270', tankKey: 'ST13-G95-01', label: 'มือจ่าย 3' },
        { id: 'M271', tankKey: 'ST13-E20-01', label: 'ไม่มีมิเตอร์' },
        // ST14 ศรีสะเกษดาวนิภา (7 meters)
        { id: 'M272', tankKey: 'ST14-D-01', label: 'มือจ่าย 1' },
        { id: 'M273', tankKey: 'ST14-D-01', label: 'มือจ่าย 2' },
        { id: 'M274', tankKey: 'ST14-D-01', label: 'มือจ่าย 3' },
        { id: 'M275', tankKey: 'ST14-D-01', label: 'มือจ่าย 4' },
        { id: 'M276', tankKey: 'ST14-G91-01', label: 'มือจ่าย 1' },
        { id: 'M277', tankKey: 'ST14-G91-01', label: 'มือจ่าย 2' },
        { id: 'M278', tankKey: 'ST14-G91-01', label: 'มือจ่าย 3' },
    ],
    products: [
        { id: 'P001', name: 'เพอร์ฟอร์มา เอ็นจีวี 1 ลิตร', price: 200 },
        { id: 'P002', name: 'เพอร์ฟอร์มา 4 ลิตร', price: 635 },
        { id: 'P003', name: 'เพอร์ฟอร์มา 1 ลิตร', price: 153 },
        { id: 'P004', name: 'วี 120 D/B 5 ลิตร', price: 520 },
        { id: 'P005', name: 'วี 120 D/B 1 ลิตร', price: 109 },
        { id: 'P006', name: 'ไดนามิค คอมมอนเรล 6+1 ลิตร', price: 1050 },
        { id: 'P007', name: 'ไดนามิค คอมมอนเรล 1 ลิตร', price: 175 },
        { id: 'P008', name: 'ไดนามิค พรีเมียร์ 6+1 ลิตร', price: 1030 },
        { id: 'P009', name: 'ไดนามิค พรีเมียร์ 1 ลิตร', price: 172 },
        { id: 'P010', name: 'ไดนามิค เทอร์โบ 6+1 ลิตร', price: 815 },
        { id: 'P011', name: 'ไดนามิค เทอร์โบ 1 ลิตร', price: 136 },
        { id: 'P012', name: 'ไดนามิค พลัส 6+1 ลิตร', price: 852 },
        { id: 'P013', name: 'ไดนามิค พลัส 1 ลิตร', price: 140 },
        { id: 'P014', name: 'ดี 3 พลัส 5+1 ลิตร', price: 620 },
        { id: 'P015', name: 'ดี 3 พลัส 1 ลิตร', price: 125 },
        { id: 'P016', name: '4 ที ไฮสปีด 1 ลิตร', price: 125 },
        { id: 'P017', name: '2 ที ไฮสปีด 1 ลิตร', price: 130 },
        { id: 'P018', name: '2 ที ไฮสปีด 0.5 ลิตร', price: 70 },
        { id: 'P019', name: 'หัวเชื้อน้ำมันเครื่อง (ใหญ่)', price: 125 },
        { id: 'P020', name: 'หัวเชื้อน้ำมันเครื่อง (เล็ก)', price: 50 },
        { id: 'P021', name: 'น้ำกลั่น', price: 18 },
        { id: 'P022', name: 'ออโต้แมท 1 ลิตร', price: 180 },
        { id: 'P023', name: 'น้ำมันเบรค 1 ลิตร', price: 290 },
        { id: 'P024', name: 'น้ำมันเบรค 0.5 ลิตร', price: 150 },
        { id: 'P025', name: 'คูลแลนต์ ปตท 1 ลิตร', price: 180 },
        { id: 'D001', name: 'เดโล่ ซิลเวอร์ 1 ลิตร', price: 200 },
        { id: 'D002', name: 'ดีเซลออยล์ 5 ลิตร', price: 680 },
        { id: 'D003', name: 'ดีเซลออยล์ 1 ลิตร', price: 170 },
        { id: 'D004', name: 'ฮาโวลีน SF 1 ลิตร', price: 170 },
        { id: 'D005', name: '2ที พาวเวอร์ 0.5 ลิตร', price: 120 },
        { id: 'D006', name: 'เบรค ดอท3 0.5 ลิตร', price: 170 },
        { id: 'D007', name: 'หัวเชื้อโซล่า', price: 45 },
        { id: 'D008', name: 'เกียร์ออโต้', price: 240 },
        { id: 'D009', name: '4 ที อีซี่ 0.8 ลิตร', price: 160 },
        { id: 'D010', name: 'D Sport 10w30 6+1 ลิตร', price: 1440 },
        { id: 'D011', name: 'D Sport 10w30 1 ลิตร', price: 240 },
        { id: 'D012', name: '4 T 10w40 0.8 ลิตร', price: 200 },
        { id: 'D013', name: 'แกลลอน (ใหญ่)', price: 80 },
        { id: 'D014', name: 'แกลลอน (เล็ก)', price: 15 },
    ],
    expenseCategories: [
        'ค่าน้ำ-น้ำแข็ง',
        'ใบเบิก',
        'ส่วนต่าง (กรณีเปลี่ยนแปลงราคา)',
        'ทดสอบน้ำมัน',
        'แม่บ้าน-พ่อบ้าน เบิก',
        'ค่าเดินทางช่วยสาขา',
        'อื่นๆ',
    ],
    fuelTypeLabels: {
        'Diesel': 'ดีเซล',
        'Gasohol 95': 'แก๊สโซฮอล์ 95',
        'Gasohol 91': 'แก๊สโซฮอล์ 91',
        'Benzyne 95': 'เบนซิน 95',
        'E 20': 'E20',
        'Diesel premium': 'ดีเซลพรีเมี่ยม',
        'Gasohol 95 P': 'แก๊สโซฮอล์ 95 พรีเมี่ยม',
        'LPG': 'แอลพีจี',
    },
};

// ===== UTILITY FUNCTIONS =====
function uuid() {
    return 'xxxx-xxxx'.replace(/x/g, () => ((Math.random() * 16) | 0).toString(16));
}

function fmt(n) {
    if (n === null || n === undefined || isNaN(n)) return '0.00';
    return Number(n).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtInt(n) {
    if (n === null || n === undefined || isNaN(n)) return '0';
    return Number(n).toLocaleString('th-TH');
}

function parseNum(v) {
    const n = parseFloat(v);
    return isNaN(n) ? 0 : n;
}

function todayStr() {
    return new Date().toISOString().split('T')[0];
}

function formatDateThai(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
}

function formatDateThaiFull(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' });
}

function thaiDateInput(id, value, onchangeCode) {
    const display = value ? formatDateThaiFull(value) : 'เลือกวันที่';
    return `<div style="position:relative;display:inline-block;width:100%">
        <input type="date" id="${id}" value="${value}" class="thai-date-native"
            onchange="${onchangeCode};document.getElementById('${id}_display').textContent=formatDateThaiFull(this.value)">
        <div id="${id}_display" class="thai-date-overlay">${display}</div>
    </div>`;
}

function formatMonthThai(yearMonth) {
    if (!yearMonth) return '';
    const [y, m] = yearMonth.split('-').map(Number);
    const thaiMonths = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
    return thaiMonths[m - 1] + ' ' + (y + 543);
}

function thaiMonthInput(id, value, onchangeCode) {
    const display = value ? formatMonthThai(value) : 'เลือกเดือน';
    return `<div style="position:relative;display:inline-block;width:100%">
        <input type="month" id="${id}" value="${value}" class="thai-date-native"
            onchange="${onchangeCode};document.getElementById('${id}_display').textContent=formatMonthThai(this.value)">
        <div id="${id}_display" class="thai-date-overlay">${display}</div>
    </div>`;
}

function getStationName(id) {
    const s = REF.stations.find(s => s.id === id);
    return s ? s.name : id;
}

function getFuelClass(fuelType) {
    return 'fuel-' + fuelType.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
}

// ===== DATA STORAGE (localStorage) =====
const DB = {
    _cache: {},
    _pricesCache: {},
    _pricesUpdatedAt: null,
    _taxCache: {},
    _loaded: false,

    // --- Format converters ---
    _fromDb(row) {
        return {
            stationId: row.station_id,
            date: row.record_date,
            staffId: row.staff_id || '',
            meterReadings: row.meter_readings || {},
            stockEntries: row.stock_entries || {},
            productSales: row.product_sales || [],
            productStockEntries: row.product_stock_entries || {},
            taxInvoices: row.tax_invoices || { abbreviated: [], full: [] },
            expenses: row.expenses || [],
            creditCardEntries: row.credit_card_entries || [],
            bluecardEntries: row.bluecard_entries || [],
            creditCustomers: row.credit_customers || [],
            finance: row.finance || {},
            fuelPrices: row.fuel_prices || {},
            internalUsage: row.internal_usage || [],
            updatedAt: row.updated_at,
        };
    },
    _toDb(record) {
        const userId = (Auth.currentUser && Auth.currentUser.id) || null;
        const obj = {
            station_id: record.stationId,
            record_date: record.date,
            staff_id: record.staffId || '',
            meter_readings: record.meterReadings || {},
            stock_entries: record.stockEntries || {},
            product_sales: record.productSales || [],
            product_stock_entries: record.productStockEntries || {},
            tax_invoices: record.taxInvoices || { abbreviated: [], full: [] },
            expenses: record.expenses || [],
            credit_card_entries: record.creditCardEntries || [],
            bluecard_entries: record.bluecardEntries || [],
            credit_customers: record.creditCustomers || [],
            finance: record.finance || {},
            fuel_prices: record.fuelPrices || {},
            internal_usage: record.internalUsage || [],
            updated_at: new Date().toISOString(),
            updated_by: userId,
        };
        // Include created_by for new records
        if (!record._existsInDb) obj.created_by = userId;
        return obj;
    },

    // --- localStorage backup ---
    _backupRecords() {
        try { localStorage.setItem('fuelAccounting_v1', JSON.stringify(this._cache)); } catch(e) {}
    },
    _backupPrices() {
        try { localStorage.setItem('fuelPrices_v2', JSON.stringify({ prices: this._pricesCache, updatedAt: this._pricesUpdatedAt })); } catch(e) {}
    },
    _backupTax() {
        try { localStorage.setItem('fuelAccounting_taxEntry_v1', JSON.stringify(this._taxCache)); } catch(e) {}
    },

    // --- Init: load all from Supabase (with localStorage fallback) ---
    async init() {
        try {
            const [recRes, priceRes, taxRes, cpRes, csRes] = await Promise.all([
                supabaseClient.from('daily_records').select('*'),
                supabaseClient.from('fuel_prices').select('*'),
                supabaseClient.from('tax_entries').select('*'),
                supabaseClient.from('credit_payments').select('*').then(r => r).catch(() => ({ data: [], error: null })),
                supabaseClient.from('app_settings').select('*').eq('key', 'credit_settings').then(r => r).catch(() => ({ data: [], error: null })),
            ]);

            if (recRes.error) throw recRes.error;
            this._cache = {};
            (recRes.data || []).forEach(r => {
                const a = this._fromDb(r);
                this._cache[`${a.stationId}_${a.date}`] = a;
            });

            if (priceRes.error) throw priceRes.error;
            this._pricesCache = {};
            (priceRes.data || []).forEach(p => {
                this._pricesCache[p.fuel_type] = parseFloat(p.price);
            });
            if (priceRes.data && priceRes.data.length > 0) {
                this._pricesUpdatedAt = priceRes.data.reduce((latest, p) =>
                    p.updated_at > latest ? p.updated_at : latest, '');
            }

            if (taxRes.error) throw taxRes.error;
            this._taxCache = {};
            (taxRes.data || []).forEach(t => {
                this._taxCache[`${t.station_id}_${t.record_date}`] = t.data;
            });

            // Credit payments
            if (cpRes && cpRes.data) {
                this._creditPaymentsCache = cpRes.data.map(r => r.data || r);
            }
            // Credit settings
            if (csRes && csRes.data && csRes.data.length > 0) {
                this._creditSettingsCache = csRes.data[0].data || this._creditSettingsCache;
            }

            this._backupRecords();
            this._backupPrices();
            this._backupTax();
            this._backupCreditPayments();
            this._backupCreditSettings();
        } catch (e) {
            console.warn('Supabase load failed, using localStorage:', e);
            try { this._cache = JSON.parse(localStorage.getItem('fuelAccounting_v1') || '{}'); } catch { this._cache = {}; }
            try {
                const pd = JSON.parse(localStorage.getItem('fuelPrices_v2') || '{}');
                this._pricesCache = pd.prices || {};
                this._pricesUpdatedAt = pd.updatedAt || null;
            } catch { this._pricesCache = {}; }
            try { this._taxCache = JSON.parse(localStorage.getItem('fuelAccounting_taxEntry_v1') || '{}'); } catch { this._taxCache = {}; }
            try { this._creditPaymentsCache = JSON.parse(localStorage.getItem('fuelAccounting_creditPayments_v1') || '[]'); } catch { this._creditPaymentsCache = []; }
            try { this._creditSettingsCache = JSON.parse(localStorage.getItem('fuelAccounting_creditSettings_v1') || '{}'); } catch { this._creditSettingsCache = { overdueDays: 30, defaultCreditLimit: 50000, customerLimits: {} }; }
        }
        this._loaded = true;
    },

    // --- Daily Records (synchronous reads, async sync) ---
    getDailyRecord(stationId, date) {
        return this._cache[`${stationId}_${date}`] || null;
    },
    saveDailyRecord(record) {
        const key = `${record.stationId}_${record.date}`;
        this._cache[key] = record;
        this._backupRecords();
        this._syncRecord(record);
    },
    async _syncRecord(record) {
        try {
            // Ensure session is still valid before syncing
            let { data: { session } } = await supabaseClient.auth.getSession();
            if (!session) {
                // Try to refresh
                const { data: refreshData } = await supabaseClient.auth.refreshSession();
                session = refreshData.session;
                if (!session) {
                    showToast('Session หมดอายุ กรุณาเข้าสู่ระบบใหม่', 'error');
                    return;
                }
            }
            const dbData = this._toDb(record);
            let { error } = await supabaseClient
                .from('daily_records')
                .upsert(dbData, { onConflict: 'station_id,record_date' });
            // Retry once on RLS error after refreshing session
            if (error && error.message && error.message.includes('row-level security')) {
                const { data: retryRefresh } = await supabaseClient.auth.refreshSession();
                if (retryRefresh.session) {
                    const retry = await supabaseClient
                        .from('daily_records')
                        .upsert(dbData, { onConflict: 'station_id,record_date' });
                    error = retry.error;
                }
            }
            if (error) { console.error('Sync failed:', error); showToast('Sync: ' + error.message, 'error'); }
        } catch (e) { console.error('Sync error:', e); }
    },
    getAllRecords() {
        return Object.values(this._cache).sort((a, b) => b.date.localeCompare(a.date));
    },
    deleteRecord(stationId, date) {
        delete this._cache[`${stationId}_${date}`];
        this._backupRecords();
        supabaseClient.from('daily_records').delete()
            .eq('station_id', stationId).eq('record_date', date)
            .then(({ error }) => { if (error) console.error('Delete failed:', error); });
    },

    // --- Fuel Prices ---
    getFuelPrices() {
        return { ...this._pricesCache };
    },
    getFuelPricesInfo() {
        return { prices: { ...this._pricesCache }, updatedAt: this._pricesUpdatedAt };
    },
    saveFuelPrices(prices) {
        this._pricesCache = { ...prices };
        this._pricesUpdatedAt = new Date().toISOString();
        this._backupPrices();
        const rows = Object.entries(prices).map(([fuel_type, price]) => ({
            fuel_type, price: parseFloat(price) || 0,
            updated_at: new Date().toISOString(),
            updated_by: (Auth.currentUser && Auth.currentUser.id) || null,
        }));
        rows.forEach(row => {
            supabaseClient.from('fuel_prices').upsert(row, { onConflict: 'fuel_type' })
                .then(({ error }) => { if (error) console.error('Price sync:', error); });
        });
    },

    // --- Tax Entries ---
    getTaxEntry(stationId, date) {
        return this._taxCache[`${stationId}_${date}`] || null;
    },
    saveTaxEntry(entry) {
        this._taxCache[`${entry.stationId}_${entry.date}`] = entry;
        this._backupTax();
        supabaseClient.from('tax_entries').upsert({
            station_id: entry.stationId, record_date: entry.date,
            data: entry, updated_at: new Date().toISOString(),
            updated_by: (Auth.currentUser && Auth.currentUser.id) || null,
        }, { onConflict: 'station_id,record_date' })
            .then(({ error }) => { if (error) console.error('Tax sync:', error); });
    },

    // --- Credit Payments (การรับชำระหนี้) ---
    _creditPaymentsCache: [],
    _backupCreditPayments() {
        try { localStorage.setItem('fuelAccounting_creditPayments_v1', JSON.stringify(this._creditPaymentsCache)); } catch(e) {}
    },
    getCreditPayments() { return this._creditPaymentsCache; },
    getCreditPaymentsByCustomer(customerName) {
        return this._creditPaymentsCache.filter(p => p.customerName === customerName);
    },
    saveCreditPayment(payment) {
        if (!payment.id) payment.id = 'cp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
        payment.createdAt = payment.createdAt || new Date().toISOString();
        const idx = this._creditPaymentsCache.findIndex(p => p.id === payment.id);
        if (idx >= 0) this._creditPaymentsCache[idx] = payment;
        else this._creditPaymentsCache.push(payment);
        this._backupCreditPayments();
        // Sync to Supabase
        supabaseClient.from('credit_payments').upsert({
            id: payment.id,
            data: payment,
            customer_name: payment.customerName,
            customer_code: payment.customerCode || '',
            payment_date: payment.paymentDate,
            amount: parseFloat(payment.amount) || 0,
            updated_at: new Date().toISOString(),
        }, { onConflict: 'id' })
            .then(({ error }) => { if (error) console.error('Credit payment sync:', error); });
    },
    deleteCreditPayment(paymentId) {
        this._creditPaymentsCache = this._creditPaymentsCache.filter(p => p.id !== paymentId);
        this._backupCreditPayments();
        supabaseClient.from('credit_payments').delete().eq('id', paymentId)
            .then(({ error }) => { if (error) console.error('Credit payment delete:', error); });
    },

    // --- Credit Settings (วงเงินเครดิต / เงื่อนไข) ---
    _creditSettingsCache: { overdueDays: 30, defaultCreditLimit: 50000, customerLimits: {} },
    _backupCreditSettings() {
        try { localStorage.setItem('fuelAccounting_creditSettings_v1', JSON.stringify(this._creditSettingsCache)); } catch(e) {}
    },
    getCreditSettings() { return this._creditSettingsCache; },
    saveCreditSettings(settings) {
        this._creditSettingsCache = settings;
        this._backupCreditSettings();
        supabaseClient.from('app_settings').upsert({
            key: 'credit_settings', data: settings, updated_at: new Date().toISOString(),
        }, { onConflict: 'key' })
            .then(({ error }) => { if (error) console.error('Credit settings sync:', error); });
    },
};

// ===== APP STATE =====
let currentPage = 'dashboard';
let editingRecord = null; // { stationId, date } when editing
let fuelPricesUnlocked = false; // Fuel prices locked by default

// Dashboard state
const now = new Date();
let dashboardState = {
    period: 'month',
    selectedDate: todayStr(),
    selectedMonth: now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0'),
    selectedYear: String(now.getFullYear()),
    stationFilter: '',
    chartTypes: { revenue: 'bar', byStation: 'bar', trend: 'line', expenses: 'doughnut', variance: 'bar', fuelVolume: 'bar', fuelReceived: 'bar' },
    visibleSections: {
        stats: true, payment: true, fuelVolume: true, fuelReceived: true,
        chartFuelVolume: true, chartFuelReceived: true, chartVariance: true, chartRevenue: true,
        chartByStation: true, chartTrend: true, chartExpenses: true, table: true
    },
};
let chartInstances = {};

const CHART_COLORS = ['#4f46e5','#06b6d4','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899','#6366f1','#14b8a6','#f97316','#84cc16','#a855f7','#64748b'];

// ===== DASHBOARD DATA HELPERS =====
function getFilteredRecords() {
    const all = DB.getAllRecords();
    const { period, selectedDate, selectedMonth, selectedYear, stationFilter } = dashboardState;
    return all.filter(r => {
        if (!isRecordComplete(r)) return false;
        if (stationFilter && r.stationId !== stationFilter) return false;
        if (period === 'day') return r.date === selectedDate;
        if (period === 'month') return r.date.substring(0, 7) === selectedMonth;
        if (period === 'year') return r.date.substring(0, 4) === selectedYear;
        return true;
    });
}

function aggregateByStation(records) {
    const map = {};
    records.forEach(r => {
        const f = r.finance || {};
        if (!map[r.stationId]) map[r.stationId] = { fuel: 0, products: 0, expenses: 0, gross: 0, expected: 0, actual: 0, variance: 0, count: 0 };
        const m = map[r.stationId];
        m.fuel += f.fuelSalesValue || 0;
        m.products += f.lubricantSales || 0;
        m.expenses += f.siteExpenses || 0;
        m.gross += f.totalGrossIncome || 0;
        m.expected += f.expectedCash || 0;
        m.actual += f.actualCashSent || 0;
        m.variance += f.cashVariance || 0;
        m.count++;
    });
    return map;
}

function aggregateByDate(records) {
    const map = {};
    records.forEach(r => {
        const f = r.finance || {};
        let key = r.date;
        if (dashboardState.period === 'month') key = r.date; // daily within month
        if (dashboardState.period === 'year') key = r.date.substring(0, 7); // monthly within year
        if (!map[key]) map[key] = { fuel: 0, products: 0, gross: 0 };
        map[key].fuel += f.fuelSalesValue || 0;
        map[key].products += f.lubricantSales || 0;
        map[key].gross += f.totalGrossIncome || 0;
    });
    return Object.entries(map).sort((a, b) => a[0].localeCompare(b[0]));
}

function aggregateExpenseCategories(records) {
    const map = {};
    records.forEach(r => {
        (r.expenses || []).forEach(e => {
            const cat = e.category || 'อื่นๆ';
            map[cat] = (map[cat] || 0) + parseNum(e.amount);
        });
    });
    return map;
}

function destroyAllCharts() {
    Object.values(chartInstances).forEach(c => { try { c.destroy(); } catch(e){} });
    chartInstances = {};
}

// SVG icon strings for chart type buttons
const ICON_BAR = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="12" width="4" height="9" rx="1"/><rect x="10" y="6" width="4" height="15" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg>';
const ICON_LINE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg>';
const ICON_PIE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12c0-4.97-4.03-9-9-9v9h9z"/><path d="M12 12H3a9 9 0 0 0 9 9v-9z"/><path d="M12 3a9 9 0 0 0-9 9h9V3z"/></svg>';
const ICON_DOUGHNUT = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v4"/></svg>';

function chartTypeBtns(chartKey, allowed) {
    const icons = { bar: ICON_BAR, line: ICON_LINE, pie: ICON_PIE, doughnut: ICON_DOUGHNUT };
    const labels = { bar: 'แท่ง', line: 'เส้น', pie: 'วงกลม', doughnut: 'โดนัท' };
    return `<div class="chart-type-btns">${allowed.map(t =>
        `<button class="chart-type-btn ${dashboardState.chartTypes[chartKey] === t ? 'active' : ''}" onclick="switchChartType('${chartKey}','${t}')" title="${labels[t]}">${icons[t]}</button>`
    ).join('')}</div>`;
}

function switchChartType(chartKey, type) {
    dashboardState.chartTypes[chartKey] = type;
    renderDashboardCharts();
}

function onDashboardFilterChange() {
    const periodBtns = document.querySelectorAll('.period-tab');
    periodBtns.forEach(b => { if (b.classList.contains('active')) dashboardState.period = b.dataset.period; });
    const dateEl = document.getElementById('filterDate');
    const monthEl = document.getElementById('filterMonth');
    const yearEl = document.getElementById('filterYear');
    const stationEl = document.getElementById('filterStation');
    if (dateEl) dashboardState.selectedDate = dateEl.value;
    if (monthEl) dashboardState.selectedMonth = monthEl.value;
    if (yearEl) dashboardState.selectedYear = yearEl.value;
    if (stationEl) dashboardState.stationFilter = stationEl.value;
    renderDashboardContent();
}

function switchPeriod(btn) {
    document.querySelectorAll('.period-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    dashboardState.period = btn.dataset.period;
    // Show/hide correct date input
    document.querySelectorAll('.filter-date-input').forEach(el => el.style.display = 'none');
    const show = document.getElementById('filterWrap_' + dashboardState.period);
    if (show) show.style.display = '';
    renderDashboardContent();
}

// ===== COMPARE STATIONS PAGE =====
let compareState = {
    selectedStations: [],
    period: 'month',
    selectedDate: todayStr(),
    selectedMonth: now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0'),
    selectedYear: String(now.getFullYear()),
    rangeType: 'day',  // 'day' or 'month'
    rangeFrom: todayStr(),
    rangeTo: todayStr(),
    rangeMonthFrom: now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0'),
    rangeMonthTo: now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0'),
};
let compareCharts = [];

function getCompareRecords(stationId) {
    const all = DB.getAllRecords();
    const { period, selectedDate, selectedMonth, selectedYear, rangeType, rangeFrom, rangeTo, rangeMonthFrom, rangeMonthTo } = compareState;
    return all.filter(r => {
        if (r.stationId !== stationId) return false;
        if (period === 'day') return r.date === selectedDate;
        if (period === 'month') return r.date.substring(0, 7) === selectedMonth;
        if (period === 'year') return r.date.substring(0, 4) === selectedYear;
        if (period === 'range') {
            if (rangeType === 'day') return r.date >= rangeFrom && r.date <= rangeTo;
            if (rangeType === 'month') {
                const rm = r.date.substring(0, 7);
                return rm >= rangeMonthFrom && rm <= rangeMonthTo;
            }
        }
        return true;
    });
}

function aggregateCompareData(stationId) {
    const records = getCompareRecords(stationId);
    const d = { fuel: 0, products: 0, gross: 0, creditSales: 0, creditCard: 0, bluecard: 0, qrTransfer: 0, expenses: 0, expected: 0, actual: 0, variance: 0, count: records.length, fuelVolumes: {}, fuelReceived: {} };
    records.forEach(r => {
        const f = r.finance || {};
        d.fuel += f.fuelSalesValue || 0;
        d.products += f.lubricantSales || 0;
        d.gross += f.totalGrossIncome || 0;
        d.creditSales += parseNum(f.creditSales);
        d.creditCard += parseNum(f.creditCardAmt);
        d.bluecard += parseNum(f.bluecardAmt);
        d.qrTransfer += parseNum(f.qrTransferAmt);
        d.expenses += f.siteExpenses || 0;
        d.expected += f.expectedCash || 0;
        d.actual += f.actualCashSent || 0;
        d.variance += f.cashVariance || 0;
        // Fuel volumes by type
        const liters = getMeterLitersByFuelType(r, stationId);
        Object.entries(liters).forEach(([ft, vol]) => {
            if (!d.fuelVolumes[ft]) d.fuelVolumes[ft] = 0;
            d.fuelVolumes[ft] += vol;
        });
        // Fuel received by type
        const tanks = REF.tanks.filter(t => t.stationId === stationId);
        tanks.forEach(tank => {
            const se = (r.stockEntries || {})[tank.key];
            if (se && parseNum(se.fuelAdded) > 0) {
                if (!d.fuelReceived[tank.fuelType]) d.fuelReceived[tank.fuelType] = 0;
                d.fuelReceived[tank.fuelType] += parseNum(se.fuelAdded);
            }
        });
    });
    return d;
}

function renderComparePage(el) {
    compareCharts.forEach(c => c.destroy()); compareCharts = [];
    const cs = compareState;
    const periodBtns = ['day','month','year','range'].map(p =>
        `<button class="period-tab ${cs.period === p ? 'active' : ''}" onclick="compareState.period='${p}';renderComparePage(document.getElementById('pageContent'))">${{day:'วัน',month:'เดือน',year:'ปี',range:'ช่วงวันที่'}[p]}</button>`
    ).join('');

    const yearOpts = [];
    for (let y = now.getFullYear(); y >= now.getFullYear() - 3; y--) yearOpts.push(`<option value="${y}" ${cs.selectedYear === String(y) ? 'selected' : ''}>${y + 543}</option>`);

    el.innerHTML = `
        <div class="card" style="margin-bottom:16px">
            <div class="card-header"><h3>ตัวกรองข้อมูล</h3></div>
            <div class="dashboard-filters" style="padding:16px;flex-wrap:wrap;gap:12px">
                <div class="filter-group">
                    <label>ช่วงเวลา</label>
                    <div class="period-tabs">${periodBtns}</div>
                </div>
                <div class="filter-group" id="cmpFilterWrap_day" style="display:${cs.period === 'day' ? '' : 'none'}">
                    <label>วันที่</label>
                    <input type="date" id="cmpFilterDate" value="${cs.selectedDate}" onchange="compareState.selectedDate=this.value;renderCompareContent()">
                </div>
                <div class="filter-group" id="cmpFilterWrap_month" style="display:${cs.period === 'month' ? '' : 'none'}">
                    <label>เดือน</label>
                    <input type="month" id="cmpFilterMonth" value="${cs.selectedMonth}" onchange="compareState.selectedMonth=this.value;renderCompareContent()">
                </div>
                <div class="filter-group" id="cmpFilterWrap_year" style="display:${cs.period === 'year' ? '' : 'none'}">
                    <label>ปี</label>
                    <select id="cmpFilterYear" onchange="compareState.selectedYear=this.value;renderCompareContent()">${yearOpts.join('')}</select>
                </div>
                <div id="cmpFilterWrap_range" style="display:${cs.period === 'range' ? '' : 'none'}">
                    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                        <div class="filter-group">
                            <label>ประเภท</label>
                            <select onchange="compareState.rangeType=this.value;renderComparePage(document.getElementById('pageContent'))">
                                <option value="day" ${cs.rangeType === 'day' ? 'selected' : ''}>รายวัน</option>
                                <option value="month" ${cs.rangeType === 'month' ? 'selected' : ''}>รายเดือน</option>
                            </select>
                        </div>
                        ${cs.rangeType === 'day' ? `
                        <div class="filter-group">
                            <label>จากวันที่</label>
                            <input type="date" value="${cs.rangeFrom}" onchange="compareState.rangeFrom=this.value;renderCompareContent()">
                        </div>
                        <div class="filter-group">
                            <label>ถึงวันที่</label>
                            <input type="date" value="${cs.rangeTo}" onchange="compareState.rangeTo=this.value;renderCompareContent()">
                        </div>
                        ` : `
                        <div class="filter-group">
                            <label>จากเดือน</label>
                            <input type="month" value="${cs.rangeMonthFrom}" onchange="compareState.rangeMonthFrom=this.value;renderCompareContent()">
                        </div>
                        <div class="filter-group">
                            <label>ถึงเดือน</label>
                            <input type="month" value="${cs.rangeMonthTo}" onchange="compareState.rangeMonthTo=this.value;renderCompareContent()">
                        </div>
                        `}
                    </div>
                </div>
            </div>
        </div>

        <div class="card" style="margin-bottom:16px">
            <div class="card-header">
                <h3>เลือกสาขาเปรียบเทียบ</h3>
                <div style="display:flex;gap:8px">
                    <button class="btn btn-sm btn-outline" onclick="toggleAllCompareStations(true)">เลือกทั้งหมด</button>
                    <button class="btn btn-sm btn-outline" onclick="toggleAllCompareStations(false)">ยกเลิกทั้งหมด</button>
                </div>
            </div>
            <div class="compare-station-grid" style="padding:16px">
                ${REF.stations.map(s => `
                    <label class="compare-checkbox">
                        <input type="checkbox" value="${s.id}" ${cs.selectedStations.includes(s.id) ? 'checked' : ''} onchange="toggleCompareStation('${s.id}')">
                        <span>${s.name}</span>
                    </label>
                `).join('')}
            </div>
        </div>

        <div id="compareResult"></div>
    `;
    renderCompareContent();
}

function toggleCompareStation(stationId) {
    const idx = compareState.selectedStations.indexOf(stationId);
    if (idx >= 0) compareState.selectedStations.splice(idx, 1);
    else compareState.selectedStations.push(stationId);
    renderCompareContent();
}

function toggleAllCompareStations(selectAll) {
    compareState.selectedStations = selectAll ? REF.stations.map(s => s.id) : [];
    // update checkboxes
    document.querySelectorAll('.compare-checkbox input').forEach(cb => { cb.checked = selectAll; });
    renderCompareContent();
}

function renderCompareContent() {
    const el = document.getElementById('compareResult');
    if (!el) return;
    const selected = compareState.selectedStations;

    if (selected.length === 0) {
        el.innerHTML = '<div class="card"><div style="text-align:center;padding:48px;color:var(--gray-400)">กรุณาเลือกอย่างน้อย 1 สาขาเพื่อดูข้อมูลเปรียบเทียบ</div></div>';
        compareCharts.forEach(c => c.destroy()); compareCharts = [];
        return;
    }

    // Aggregate data for each station
    const stationData = {};
    selected.forEach(sid => { stationData[sid] = aggregateCompareData(sid); });

    const metrics = [
        { key: 'count', label: 'จำนวนรายการ', isCurrency: false },
        { key: 'fuel', label: 'รายได้น้ำมัน', isCurrency: true },
        { key: 'products', label: 'รายได้สินค้า', isCurrency: true },
        { key: 'gross', label: 'รายได้รวม', isCurrency: true, highlight: true },
        { key: 'creditSales', label: 'เงินเชื่อ', isCurrency: true },
        { key: 'creditCard', label: 'เครดิตการ์ด', isCurrency: true },
        { key: 'bluecard', label: 'Bluecard', isCurrency: true },
        { key: 'qrTransfer', label: 'เงินโอน / QR', isCurrency: true },
        { key: 'expenses', label: 'ค่าใช้จ่าย', isCurrency: true },
        { key: 'expected', label: 'ยอดที่ต้องส่ง', isCurrency: true },
        { key: 'actual', label: 'ยอดจริง', isCurrency: true },
        { key: 'variance', label: 'ส่วนต่าง', isCurrency: true, isVariance: true },
    ];

    // Build comparison table
    let tableHtml = `<div class="card" style="margin-bottom:16px">
        <div class="card-header"><h3>ตารางเปรียบเทียบ</h3></div>
        <div class="table-wrapper">
            <table class="compare-table">
                <thead><tr>
                    <th style="min-width:140px;position:sticky;left:0;background:#f8fafc;z-index:2">รายการ</th>
                    ${selected.map(sid => `<th class="number" style="min-width:130px">${getStationName(sid)}</th>`).join('')}
                </tr></thead>
                <tbody>`;

    metrics.forEach(m => {
        const rowClass = m.highlight ? ' style="background:#f0f0ff;font-weight:600"' : '';
        tableHtml += `<tr${rowClass}>
            <td style="position:sticky;left:0;background:${m.highlight ? '#f0f0ff' : '#fff'};z-index:1;font-weight:500">${m.label}</td>`;
        selected.forEach(sid => {
            const val = stationData[sid][m.key];
            let cellClass = 'number';
            let display = m.isCurrency ? fmt(val) : val;
            if (m.isVariance && val !== 0) {
                cellClass += val >= 0 ? ' variance-positive' : ' variance-negative';
            }
            tableHtml += `<td class="${cellClass}">${display}</td>`;
        });
        tableHtml += `</tr>`;
    });

    // Fuel volume rows by type
    const allFuelTypes = new Set();
    selected.forEach(sid => { Object.keys(stationData[sid].fuelVolumes).forEach(ft => allFuelTypes.add(ft)); });
    const fuelTypeList = Array.from(allFuelTypes).sort();

    if (fuelTypeList.length > 0) {
        tableHtml += `<tr style="background:#f0fdf4"><td colspan="${selected.length + 1}" style="position:sticky;left:0;background:#f0fdf4;font-weight:700;padding:10px 12px">ปริมาณขายน้ำมัน (ลิตร)</td></tr>`;
        let totalPerStation = {};
        selected.forEach(sid => { totalPerStation[sid] = 0; });

        fuelTypeList.forEach(ft => {
            const label = REF.fuelTypeLabels[ft] || ft;
            tableHtml += `<tr><td style="position:sticky;left:0;background:#fff;z-index:1;font-weight:500;padding-left:24px">${label}</td>`;
            selected.forEach(sid => {
                const vol = stationData[sid].fuelVolumes[ft] || 0;
                totalPerStation[sid] += vol;
                tableHtml += `<td class="number">${fmt(vol)}</td>`;
            });
            tableHtml += `</tr>`;
        });

        // Total liters row
        tableHtml += `<tr style="background:#f0fdf4;font-weight:600"><td style="position:sticky;left:0;background:#f0fdf4;z-index:1;font-weight:700">รวมลิตรทั้งหมด</td>`;
        selected.forEach(sid => { tableHtml += `<td class="number">${fmt(totalPerStation[sid])}</td>`; });
        tableHtml += `</tr>`;
    }

    // Fuel received rows by type
    const allReceivedTypes = new Set();
    selected.forEach(sid => { Object.keys(stationData[sid].fuelReceived).forEach(ft => allReceivedTypes.add(ft)); });
    const receivedTypeList = Array.from(allReceivedTypes).sort();

    if (receivedTypeList.length > 0) {
        tableHtml += `<tr style="background:#fef3c7"><td colspan="${selected.length + 1}" style="position:sticky;left:0;background:#fef3c7;font-weight:700;padding:10px 12px">ปริมาณรับน้ำมัน (ลิตร)</td></tr>`;
        let receivedPerStation = {};
        selected.forEach(sid => { receivedPerStation[sid] = 0; });

        receivedTypeList.forEach(ft => {
            const label = REF.fuelTypeLabels[ft] || ft;
            tableHtml += `<tr><td style="position:sticky;left:0;background:#fff;z-index:1;font-weight:500;padding-left:24px">${label}</td>`;
            selected.forEach(sid => {
                const vol = stationData[sid].fuelReceived[ft] || 0;
                receivedPerStation[sid] += vol;
                tableHtml += `<td class="number">${fmt(vol)}</td>`;
            });
            tableHtml += `</tr>`;
        });

        // Total received row
        tableHtml += `<tr style="background:#fef3c7;font-weight:600"><td style="position:sticky;left:0;background:#fef3c7;z-index:1;font-weight:700">รวมรับน้ำมันทั้งหมด</td>`;
        selected.forEach(sid => { tableHtml += `<td class="number">${fmt(receivedPerStation[sid])}</td>`; });
        tableHtml += `</tr>`;
    }

    tableHtml += `</tbody></table></div></div>`;

    // Charts
    let chartHtml = `<div class="charts-grid" style="grid-template-columns:1fr 1fr">
        <div class="card">
            <div class="card-header"><h3>เปรียบเทียบรายได้ / ช่องทางชำระ (บาท)</h3></div>
            <div style="padding:16px;position:relative;height:400px">
                <canvas id="compareChartRevenue"></canvas>
            </div>
        </div>
        <div class="card">
            <div class="card-header"><h3>เปรียบเทียบปริมาณขายน้ำมัน (ลิตร)</h3></div>
            <div style="padding:16px;position:relative;height:400px">
                <canvas id="compareChartFuel"></canvas>
            </div>
        </div>
        <div class="card">
            <div class="card-header"><h3>เปรียบเทียบปริมาณรับน้ำมัน (ลิตร)</h3></div>
            <div style="padding:16px;position:relative;height:400px">
                <canvas id="compareChartReceived"></canvas>
            </div>
        </div>
    </div>`;

    el.innerHTML = tableHtml + chartHtml;

    compareCharts.forEach(c => c.destroy()); compareCharts = [];
    const labels = selected.map(sid => getStationName(sid));

    // Chart 1: Revenue & Payment
    const ctxRev = document.getElementById('compareChartRevenue');
    if (ctxRev) {
        compareCharts.push(new Chart(ctxRev, {
            type: 'bar',
            data: { labels, datasets: [
                { label: 'รายได้รวม', data: selected.map(sid => stationData[sid].gross), backgroundColor: '#4f46e5' },
                { label: 'เงินเชื่อ', data: selected.map(sid => stationData[sid].creditSales), backgroundColor: '#ef4444' },
                { label: 'เครดิตการ์ด', data: selected.map(sid => stationData[sid].creditCard), backgroundColor: '#3b82f6' },
                { label: 'Bluecard', data: selected.map(sid => stationData[sid].bluecard), backgroundColor: '#0ea5e9' },
                { label: 'เงินโอน / QR', data: selected.map(sid => stationData[sid].qrTransfer), backgroundColor: '#10b981' },
                { label: 'ค่าใช้จ่าย', data: selected.map(sid => stationData[sid].expenses), backgroundColor: '#f59e0b' },
            ]},
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: c => c.dataset.label + ': ' + fmt(c.parsed.y) + ' บาท' } } },
                scales: { y: { beginAtZero: true, ticks: { callback: v => fmt(v) } }, x: { ticks: { maxRotation: 45 } } },
            },
        }));
    }

    // Chart 2: Fuel Volume (liters)
    const ctxFuel = document.getElementById('compareChartFuel');
    if (ctxFuel && fuelTypeList.length > 0) {
        const fuelColorMap = {
            'Diesel': '#3b82f6',
            'Benzyne 95': '#eab308',
            'Gasohol 95': '#f97316',
            'Gasohol 91': '#22c55e',
            'E 20': '#ef4444',
            'Diesel premium': '#94a3b8',
            'Gasohol 95 P': '#ec4899',
            'LPG': '#8b5cf6',
        };
        const fuelDatasets = fuelTypeList.map(ft => ({
            label: REF.fuelTypeLabels[ft] || ft,
            data: selected.map(sid => stationData[sid].fuelVolumes[ft] || 0),
            backgroundColor: fuelColorMap[ft] || '#64748b',
        }));
        compareCharts.push(new Chart(ctxFuel, {
            type: 'bar',
            data: { labels, datasets: fuelDatasets },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: c => c.dataset.label + ': ' + fmt(c.parsed.y) + ' ลิตร' } } },
                scales: { y: { beginAtZero: true, ticks: { callback: v => fmt(v) } }, x: { ticks: { maxRotation: 45 } } },
            },
        }));
    }

    // Chart 3: Fuel Received (liters)
    const ctxReceived = document.getElementById('compareChartReceived');
    if (ctxReceived && receivedTypeList.length > 0) {
        const fuelColorMap = {
            'Diesel': '#3b82f6', 'Benzyne 95': '#eab308', 'Gasohol 95': '#f97316',
            'Gasohol 91': '#22c55e', 'E 20': '#ef4444', 'Diesel premium': '#94a3b8',
            'Gasohol 95 P': '#ec4899', 'LPG': '#8b5cf6',
        };
        const receivedDatasets = receivedTypeList.map(ft => ({
            label: REF.fuelTypeLabels[ft] || ft,
            data: selected.map(sid => stationData[sid].fuelReceived[ft] || 0),
            backgroundColor: fuelColorMap[ft] || '#64748b',
        }));
        compareCharts.push(new Chart(ctxReceived, {
            type: 'bar',
            data: { labels, datasets: receivedDatasets },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: c => c.dataset.label + ': ' + fmt(c.parsed.y) + ' ลิตร' } } },
                scales: { y: { beginAtZero: true, ticks: { callback: v => fmt(v) } }, x: { ticks: { maxRotation: 45 } } },
            },
        }));
    }

    // Make compare charts clickable for drill-down
    compareCharts.forEach(chart => {
        if (chart && chart.canvas) {
            chart.canvas.style.cursor = 'pointer';
            chart.canvas.onclick = (evt) => {
                const points = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, false);
                if (points.length === 0) return;
                const idx = points[0].index;
                const sid = selected[idx];
                if (sid) loadRecord(sid, compareState.selectedDate || todayStr());
            };
        }
    });
}

// ===== NAVIGATION =====
function navigateTo(page) {
    // Auto-save daily entry when navigating AWAY (not when re-entering same page)
    if (currentPage === 'daily-entry' && page !== 'daily-entry') {
        const stationId = document.getElementById('entryStation') && document.getElementById('entryStation').value;
        const date = document.getElementById('entryDate') && document.getElementById('entryDate').value;
        if (stationId && date) {
            saveCurrentRecord();
        }
    }
    currentPage = page;
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const link = document.querySelector(`[data-page="${page}"]`);
    if (link) link.classList.add('active');

    const titles = {
        'dashboard': 'แดชบอร์ด',
        'compare': 'เปรียบเทียบสาขา',
        'daily-entry': 'บันทึกประจำวัน',
        'history': 'ประวัติรายการ',
        'reference': 'ข้อมูลอ้างอิง',
        'credit-summary': 'ลูกหนี้เงินเชื่อ',
        'tax-reports': 'รายงานภาษี',
        'user-management': 'จัดการผู้ใช้',
    };
    document.getElementById('pageTitle').textContent = titles[page] || '';
    renderPage(page);
    // Close sidebar on mobile
    document.getElementById('sidebar').classList.remove('open');
}

function renderPage(page) {
    const el = document.getElementById('pageContent');
    switch (page) {
        case 'dashboard': renderDashboard(el); break;
        case 'compare': renderComparePage(el); break;
        case 'daily-entry': renderDailyEntry(el); break;
        case 'history': renderHistory(el); break;
        case 'reference': renderReference(el); break;
        case 'credit-summary': renderCreditSummary(el); break;
        case 'tax-reports': renderTaxReports(el); break;
        case 'user-management': renderUserManagement(el); break;
    }
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
    const t = document.createElement('div');
    t.className = `toast toast-${type}`;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}

// ===== DASHBOARD =====
const DASHBOARD_SECTIONS = [
    ['stats', 'สรุปรายได้'],
    ['payment', 'ช่องทางการชำระเงิน'],
    ['fuelVolume', 'ปริมาณขายน้ำมัน'],
    ['fuelReceived', 'ปริมาณรับน้ำมัน'],
    ['chartFuelVolume', 'กราฟ: ขายน้ำมันตามชนิด'],
    ['chartFuelReceived', 'กราฟ: รับน้ำมันตามชนิด'],
    ['chartVariance', 'กราฟ: ส่วนต่างเงินส่ง'],
    ['chartRevenue', 'กราฟ: รายได้รวม'],
    ['chartByStation', 'กราฟ: รายได้ตามสาขา'],
    ['chartTrend', 'กราฟ: แนวโน้มรายได้'],
    ['chartExpenses', 'กราฟ: ค่าใช้จ่าย'],
    ['table', 'ตารางรายการ'],
];

function buildSectionToggles(ds) {
    return DASHBOARD_SECTIONS.map(([key, label]) => {
        const checked = ds.visibleSections[key] ? 'checked' : '';
        return '<label class="section-toggle-item">' +
            '<input type="checkbox" ' + checked +
            ' onchange="dashboardState.visibleSections[\'' + key + '\']=this.checked;renderDashboardContent()">' +
            '<span>' + label + '</span></label>';
    }).join('');
}

function renderDashboard(el) {
    destroyAllCharts();
    const periodLabels = { day: 'รายวัน', month: 'รายเดือน', year: 'รายปี' };
    const ds = dashboardState;

    el.innerHTML = `
        <div class="dashboard-filters">
            <div class="filter-group">
                <label>ช่วงเวลา</label>
                <div class="period-tabs">
                    <button class="period-tab ${ds.period === 'day' ? 'active' : ''}" data-period="day" onclick="switchPeriod(this)">วัน</button>
                    <button class="period-tab ${ds.period === 'month' ? 'active' : ''}" data-period="month" onclick="switchPeriod(this)">เดือน</button>
                    <button class="period-tab ${ds.period === 'year' ? 'active' : ''}" data-period="year" onclick="switchPeriod(this)">ปี</button>
                </div>
            </div>
            <div class="filter-group">
                <span id="filterWrap_day" class="filter-date-input" style="${ds.period === 'day' ? '' : 'display:none'}">
                    <input type="date" id="filterDate" value="${ds.selectedDate}" onchange="onDashboardFilterChange()">
                </span>
                <span id="filterWrap_month" class="filter-date-input" style="${ds.period === 'month' ? '' : 'display:none'}">
                    <input type="month" id="filterMonth" value="${ds.selectedMonth}" onchange="onDashboardFilterChange()">
                </span>
                <span id="filterWrap_year" class="filter-date-input" style="${ds.period === 'year' ? '' : 'display:none'}">
                    <select id="filterYear" onchange="onDashboardFilterChange()">
                        ${(() => { const y = new Date().getFullYear(); let o = ''; for (let i = y; i >= y - 5; i--) o += `<option value="${i}" ${String(i) === ds.selectedYear ? 'selected' : ''}>${i + 543}</option>`; return o; })()}
                    </select>
                </span>
            </div>
            <div class="filter-group">
                <label>สาขา</label>
                <select id="filterStation" onchange="onDashboardFilterChange()">
                    <option value="">ทุกสาขา</option>
                    ${REF.stations.map(s => `<option value="${s.id}" ${ds.stationFilter === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                </select>
            </div>
        </div>

        <div class="card" style="margin-bottom:16px">
            <div class="card-header" style="cursor:pointer" onclick="document.getElementById('sectionToggles').style.display=document.getElementById('sectionToggles').style.display==='none'?'':'none'">
                <h3>เลือกข้อมูลที่ต้องการแสดง</h3>
                <span style="font-size:12px;color:var(--gray-400)">คลิกเพื่อเปิด/ปิด</span>
            </div>
            <div id="sectionToggles" style="display:none;padding:12px 16px">
                <div class="section-toggle-grid">
                    ${buildSectionToggles(ds)}
                </div>
            </div>
        </div>

        <div id="dashboardStats"></div>
        <div id="dashboardFuelVolume"></div>
        <div id="dashboardFuelReceived"></div>
        <div id="dashboardCharts"></div>
        <div id="dashboardTable"></div>
    `;

    // Show cached data first, then refresh from Supabase and re-render
    renderDashboardContent();
    DB.init().then(() => { if (currentPage === 'dashboard') renderDashboardContent(); });
}

function renderDashboardContent() {
    const records = getFilteredRecords();
    const vis = dashboardState.visibleSections;
    let totalFuel = 0, totalProducts = 0, totalExpenses = 0, totalGross = 0;
    let totalCreditSales = 0, totalCreditCard = 0, totalBluecard = 0, totalQrTransfer = 0;
    records.forEach(r => {
        const f = r.finance || {};
        totalFuel += f.fuelSalesValue || 0;
        totalProducts += f.lubricantSales || 0;
        totalExpenses += f.siteExpenses || 0;
        totalGross += f.totalGrossIncome || 0;
        totalCreditSales += parseNum(f.creditSales);
        totalCreditCard += parseNum(f.creditCardAmt);
        totalBluecard += parseNum(f.bluecardAmt);
        totalQrTransfer += parseNum(f.qrTransferAmt);
    });

    const periodLabel = { day: 'วันนี้', month: 'เดือนนี้', year: 'ปีนี้' }[dashboardState.period] || '';

    // Stat cards
    let statsHtml = '';
    if (vis.stats) {
        statsHtml += `<div class="stats-grid">
            <div class="stat-card stat-clickable" onclick="statCardDrillDown('recordCount')"><div class="stat-value">${records.length}</div><div class="stat-label">จำนวนรายการ</div><div class="stat-click-hint">คลิกดูรายละเอียด</div></div>
            <div class="stat-card stat-clickable" onclick="statCardDrillDown('fuelRevenue')"><div class="stat-value">${fmt(totalFuel)}</div><div class="stat-label">รายได้น้ำมัน (บาท)</div><div class="stat-click-hint">คลิกดูรายละเอียด</div></div>
            <div class="stat-card stat-clickable" onclick="statCardDrillDown('productRevenue')"><div class="stat-value">${fmt(totalProducts)}</div><div class="stat-label">รายได้สินค้า (บาท)</div><div class="stat-click-hint">คลิกดูรายละเอียด</div></div>
            <div class="stat-card stat-clickable" onclick="statCardDrillDown('grossRevenue')"><div class="stat-value">${fmt(totalGross)}</div><div class="stat-label">รายได้รวม (บาท)</div><div class="stat-click-hint">คลิกดูรายละเอียด</div></div>
        </div>`;
    }
    if (vis.payment) {
        statsHtml += `<div class="card" style="margin-top:16px">
            <div class="card-header"><h3>สรุปช่องทางการชำระเงิน (บาท)</h3></div>
            <div class="stats-grid" style="margin-bottom:0">
                <div class="stat-card payment-card stat-clickable" style="border-top:3px solid #ef4444" onclick="statCardDrillDown('creditSales')">
                    <div class="stat-value">${fmt(totalCreditSales)}</div><div class="stat-label">เงินเชื่อ</div><div class="stat-click-hint">คลิกดูรายละเอียด</div>
                </div>
                <div class="stat-card payment-card stat-clickable" style="border-top:3px solid #3b82f6" onclick="statCardDrillDown('creditCard')">
                    <div class="stat-value">${fmt(totalCreditCard)}</div><div class="stat-label">เครดิตการ์ด</div><div class="stat-click-hint">คลิกดูรายละเอียด</div>
                </div>
                <div class="stat-card payment-card stat-clickable" style="border-top:3px solid #0ea5e9" onclick="statCardDrillDown('bluecard')">
                    <div class="stat-value">${fmt(totalBluecard)}</div><div class="stat-label">Bluecard</div><div class="stat-click-hint">คลิกดูรายละเอียด</div>
                </div>
                <div class="stat-card payment-card stat-clickable" style="border-top:3px solid #10b981" onclick="statCardDrillDown('qrTransfer')">
                    <div class="stat-value">${fmt(totalQrTransfer)}</div><div class="stat-label">เงินโอน / QR</div><div class="stat-click-hint">คลิกดูรายละเอียด</div>
                </div>
            </div>
        </div>`;
    }
    document.getElementById('dashboardStats').innerHTML = statsHtml;

    // Fuel volume by type
    const fuelVolumes = {};
    let totalLiters = 0;
    records.forEach(r => {
        const liters = getMeterLitersByFuelType(r, r.stationId);
        Object.entries(liters).forEach(([ft, vol]) => {
            if (!fuelVolumes[ft]) fuelVolumes[ft] = 0;
            fuelVolumes[ft] += vol;
            totalLiters += vol;
        });
    });
    const fuelVolumeKeys = Object.keys(fuelVolumes).sort((a, b) => fuelVolumes[b] - fuelVolumes[a]);
    const fuelVolumeCards = fuelVolumeKeys.map((ft, i) => {
        const color = CHART_COLORS[i % CHART_COLORS.length];
        const label = REF.fuelTypeLabels[ft] || ft;
        return `<div class="stat-card fuel-volume-card stat-clickable" style="border-top: 3px solid ${color}" onclick="statCardDrillDown('fuelVolume','${ft}')">
            <div class="stat-value">${fmt(fuelVolumes[ft])}</div>
            <div class="stat-label">${label}</div>
            <div class="stat-click-hint">คลิกดูรายละเอียด</div>
        </div>`;
    }).join('');

    document.getElementById('dashboardFuelVolume').innerHTML = vis.fuelVolume ? `
        <div class="card" style="margin-top:16px">
            <div class="card-header">
                <h3>ปริมาณการขายน้ำมัน (ลิตร) — รวม ${fmt(totalLiters)} ลิตร</h3>
            </div>
            <div class="stats-grid" style="margin-bottom:0">${fuelVolumeCards || '<div class="empty-state" style="grid-column:1/-1;text-align:center;padding:24px">ยังไม่มีข้อมูล</div>'}</div>
        </div>
    ` : '';

    // Fuel received (ปริมาณการรับน้ำมัน) by fuel type
    const fuelReceived = {};
    let totalReceived = 0;
    records.forEach(r => {
        if (!r.stockEntries) return;
        const stTanks = REF.tanks.filter(t => t.stationId === r.stationId);
        stTanks.forEach(tank => {
            const se = r.stockEntries[tank.key];
            if (se && parseNum(se.fuelAdded) > 0) {
                if (!fuelReceived[tank.fuelType]) fuelReceived[tank.fuelType] = 0;
                fuelReceived[tank.fuelType] += parseNum(se.fuelAdded);
                totalReceived += parseNum(se.fuelAdded);
            }
        });
    });
    const fuelReceivedKeys = Object.keys(fuelReceived).sort((a, b) => fuelReceived[b] - fuelReceived[a]);
    const receivedColors = ['#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f', '#fbbf24'];
    const fuelReceivedCards = fuelReceivedKeys.map((ft, i) => {
        const color = receivedColors[i % receivedColors.length];
        const label = REF.fuelTypeLabels[ft] || ft;
        return `<div class="stat-card fuel-volume-card stat-clickable" style="border-top: 3px solid ${color}" onclick="statCardDrillDown('fuelReceived','${ft}')">
            <div class="stat-value">${fmt(fuelReceived[ft])}</div>
            <div class="stat-label">${label}</div>
            <div class="stat-click-hint">คลิกดูรายละเอียด</div>
        </div>`;
    }).join('');

    document.getElementById('dashboardFuelReceived').innerHTML = vis.fuelReceived ? `
        <div class="card" style="margin-top:16px">
            <div class="card-header">
                <h3>ปริมาณการรับน้ำมัน (ลิตร) — รวม ${fmt(totalReceived)} ลิตร</h3>
            </div>
            <div class="stats-grid" style="margin-bottom:0">${fuelReceivedCards || '<div class="empty-state" style="grid-column:1/-1;text-align:center;padding:24px">ยังไม่มีข้อมูล</div>'}</div>
        </div>
    ` : '';

    // Charts — all in one uniform 3-column grid
    const ds = dashboardState;
    const chartSections = [
        { key: 'chartFuelVolume', id: 'chartFuelVolume', title: 'ปริมาณขายน้ำมันตามชนิด', types: ['bar', 'doughnut', 'pie'], chartKey: 'fuelVolume' },
        { key: 'chartFuelReceived', id: 'chartFuelReceived', title: 'ปริมาณรับน้ำมันตามชนิด', types: ['bar', 'doughnut', 'pie'], chartKey: 'fuelReceived' },
        { key: 'chartVariance', id: 'chartVariance', title: 'ส่วนต่างเงินส่ง (ตามสาขา)', types: ['bar', 'line'], chartKey: 'variance' },
        { key: 'chartRevenue', id: 'chartRevenue', title: 'รายได้รวม (น้ำมัน / สินค้า / อื่นๆ)', types: ['bar', 'pie', 'doughnut'], chartKey: 'revenue' },
        { key: 'chartByStation', id: 'chartByStation', title: 'รายได้ตามสาขา', types: ['bar', 'line', 'pie'], chartKey: 'byStation' },
        { key: 'chartTrend', id: 'chartTrend', title: 'แนวโน้มรายได้', types: ['line', 'bar'], chartKey: 'trend' },
        { key: 'chartExpenses', id: 'chartExpenses', title: 'ค่าใช้จ่ายตามประเภท', types: ['doughnut', 'pie', 'bar'], chartKey: 'expenses' },
    ];
    const visibleCharts = chartSections.filter(c => vis[c.key]);
    document.getElementById('dashboardCharts').innerHTML = visibleCharts.length > 0 ? `
        <div class="charts-grid">
            ${visibleCharts.map(c => `
                <div class="chart-section">
                    <div class="chart-header">
                        <h3>${c.title}</h3>
                        ${chartTypeBtns(c.chartKey, c.types)}
                    </div>
                    <div class="chart-container"><canvas id="${c.id}"></canvas></div>
                </div>
            `).join('')}
        </div>
    ` : '';

    renderDashboardCharts();

    // Table with pagination
    if (!vis.table) { document.getElementById('dashboardTable').innerHTML = ''; return; }
    const pageSize = 30;
    const totalPages = Math.max(1, Math.ceil(records.length / pageSize));
    if (!dashboardState.tablePage || dashboardState.tablePage > totalPages) dashboardState.tablePage = 1;
    const currentPage = dashboardState.tablePage;
    const startIdx = (currentPage - 1) * pageSize;
    const pageRecords = records.slice(startIdx, startIdx + pageSize);

    let paginationHtml = '';
    if (totalPages > 1) {
        paginationHtml = '<div class="pagination">';
        paginationHtml += `<button class="pagination-btn" ${currentPage <= 1 ? 'disabled' : ''} onclick="dashboardState.tablePage=${currentPage - 1};renderDashboardContent()">&#9664;</button>`;
        const maxVisible = 7;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let endPage = Math.min(totalPages, startPage + maxVisible - 1);
        if (endPage - startPage < maxVisible - 1) startPage = Math.max(1, endPage - maxVisible + 1);
        if (startPage > 1) { paginationHtml += `<button class="pagination-btn" onclick="dashboardState.tablePage=1;renderDashboardContent()">1</button>`; if (startPage > 2) paginationHtml += '<span class="pagination-dots">...</span>'; }
        for (let p = startPage; p <= endPage; p++) {
            paginationHtml += `<button class="pagination-btn ${p === currentPage ? 'active' : ''}" onclick="dashboardState.tablePage=${p};renderDashboardContent()">${p}</button>`;
        }
        if (endPage < totalPages) { if (endPage < totalPages - 1) paginationHtml += '<span class="pagination-dots">...</span>'; paginationHtml += `<button class="pagination-btn" onclick="dashboardState.tablePage=${totalPages};renderDashboardContent()">${totalPages}</button>`; }
        paginationHtml += `<button class="pagination-btn" ${currentPage >= totalPages ? 'disabled' : ''} onclick="dashboardState.tablePage=${currentPage + 1};renderDashboardContent()">&#9654;</button>`;
        paginationHtml += '</div>';
    }

    document.getElementById('dashboardTable').innerHTML = `
        <div class="card">
            <div class="card-header">
                <h3>รายการ (${records.length} รายการ)</h3>
                <button class="btn btn-primary" onclick="navigateTo('daily-entry')">+ บันทึกใหม่</button>
            </div>
            <div class="table-wrapper">
                <table>
                    <thead><tr>
                        <th>วันที่</th><th>สาขา</th>
                        <th class="number">รายได้น้ำมัน</th><th class="number">รายได้สินค้า</th>
                        <th class="number">ยอดที่ต้องส่ง</th><th class="number">ยอดจริง</th><th class="number">ส่วนต่าง</th>
                    </tr></thead>
                    <tbody>
                        ${pageRecords.map(r => {
                            const f = r.finance || {};
                            const v = (f.actualCashSent || 0) - (f.expectedCash || 0);
                            return `<tr class="table-row-clickable" onclick="showRecordSummaryPopup('${r.stationId}','${r.date}')">
                                <td>${formatDateThai(r.date)}</td><td>${getStationName(r.stationId)}</td>
                                <td class="number">${fmt(f.fuelSalesValue)}</td><td class="number">${fmt(f.lubricantSales)}</td>
                                <td class="number">${fmt(f.expectedCash)}</td><td class="number">${fmt(f.actualCashSent)}</td>
                                <td class="number ${v >= 0 ? 'variance-positive' : 'variance-negative'}">${fmt(v)}</td>
                            </tr>`;
                        }).join('') || '<tr><td colspan="7" class="empty-state">ยังไม่มีรายการ</td></tr>'}
                    </tbody>
                </table>
            </div>
            ${paginationHtml}
        </div>
    `;
}

// ===== STAT CARD DRILL-DOWN =====
function statCardDrillDown(type) {
    const records = getFilteredRecords();
    if (records.length === 0) { showToast('ไม่มีข้อมูล', 'error'); return; }

    // Group data by station
    const byStation = {};
    records.forEach(r => {
        if (!byStation[r.stationId]) byStation[r.stationId] = [];
        byStation[r.stationId].push(r);
    });

    // Helper: build daily rows for a finance field, grouped by station with subtotals
    function buildDailyDrillDown(title, finField, unit) {
        const allRows = [];
        Object.entries(byStation).forEach(([sid, recs]) => {
            const sorted = [...recs].sort((a, b) => a.date.localeCompare(b.date));
            let stationTotal = 0;
            sorted.forEach(r => {
                const val = parseNum((r.finance || {})[finField]);
                if (val === 0) return;
                stationTotal += val;
                allRows.push({ cells: [formatDateThai(r.date), getStationName(sid), fmt(val)], _sort: r.date + sid, clickable: `showRecordSummaryPopup('${r.stationId}','${r.date}')`, stationId: r.stationId, date: r.date });
            });
            if (stationTotal > 0) {
                allRows.push({ cells: ['', '<b>รวม ' + getStationName(sid) + '</b>', '<b>' + fmt(stationTotal) + '</b>'], _sort: 'zzz' + sid, isSubtotal: true });
            }
        });
        showDrillDown(title,
            [{ label: 'วันที่' }, { label: 'สาขา' }, { label: unit, num: true }], allRows);
    }

    if (type === 'fuelRevenue') {
        buildDailyDrillDown('รายได้น้ำมัน — รายวัน', 'fuelSalesValue', 'รายได้น้ำมัน (บาท)');

    } else if (type === 'productRevenue') {
        buildDailyDrillDown('รายได้สินค้า — รายวัน', 'lubricantSales', 'รายได้สินค้า (บาท)');

    } else if (type === 'grossRevenue') {
        const allRows = [];
        Object.entries(byStation).forEach(([sid, recs]) => {
            const sorted = [...recs].sort((a, b) => a.date.localeCompare(b.date));
            let sFuel = 0, sProd = 0, sOther = 0, sGross = 0;
            sorted.forEach(r => {
                const f = r.finance || {};
                const fuel = parseNum(f.fuelSalesValue), prod = parseNum(f.lubricantSales), other = parseNum(f.otherIncome), gross = parseNum(f.totalGrossIncome);
                if (gross === 0 && fuel === 0) return;
                sFuel += fuel; sProd += prod; sOther += other; sGross += gross;
                allRows.push({ cells: [formatDateThai(r.date), getStationName(sid), fmt(fuel), fmt(prod), fmt(other), fmt(gross)], _sort: r.date + sid, clickable: `showRecordSummaryPopup('${r.stationId}','${r.date}')`, stationId: r.stationId, date: r.date });
            });
            if (sGross > 0) {
                allRows.push({ cells: ['', '<b>รวม ' + getStationName(sid) + '</b>', '<b>' + fmt(sFuel) + '</b>', '<b>' + fmt(sProd) + '</b>', '<b>' + fmt(sOther) + '</b>', '<b>' + fmt(sGross) + '</b>'], _sort: 'zzz' + sid, isSubtotal: true });
            }
        });
        showDrillDown('รายได้รวม — รายวัน',
            [{ label: 'วันที่' }, { label: 'สาขา' }, { label: 'น้ำมัน', num: true }, { label: 'สินค้า', num: true }, { label: 'อื่นๆ', num: true }, { label: 'รายได้รวม', num: true }], allRows);

    } else if (type === 'recordCount') {
        const allRows = [];
        Object.entries(byStation).forEach(([sid, recs]) => {
            const sorted = [...recs].sort((a, b) => a.date.localeCompare(b.date));
            sorted.forEach(r => {
                const f = r.finance || {};
                allRows.push({ cells: [formatDateThai(r.date), getStationName(sid), fmt(f.fuelSalesValue || 0), fmt(f.expectedCash || 0)], _sort: r.date + sid, clickable: `showRecordSummaryPopup('${r.stationId}','${r.date}')`, stationId: r.stationId, date: r.date });
            });
        });
        showDrillDown('รายการทั้งหมด — รายวัน',
            [{ label: 'วันที่' }, { label: 'สาขา' }, { label: 'รายได้น้ำมัน', num: true }, { label: 'ยอดที่ต้องส่ง', num: true }], allRows);

    } else if (type === 'creditSales') {
        buildDailyDrillDown('เงินเชื่อ — รายวัน', 'creditSales', 'ยอดเงินเชื่อ (บาท)');

    } else if (type === 'creditCard') {
        buildDailyDrillDown('เครดิตการ์ด — รายวัน', 'creditCardAmt', 'ยอดเครดิตการ์ด (บาท)');

    } else if (type === 'bluecard') {
        buildDailyDrillDown('Bluecard — รายวัน', 'bluecardAmt', 'ยอด Bluecard (บาท)');

    } else if (type === 'qrTransfer') {
        buildDailyDrillDown('เงินโอน / QR — รายวัน', 'qrTransferAmt', 'ยอดเงินโอน (บาท)');

    } else if (type === 'fuelVolume') {
        const fuelType = arguments[1];
        const allRows = [];
        Object.entries(byStation).forEach(([sid, recs]) => {
            const sorted = [...recs].sort((a, b) => a.date.localeCompare(b.date));
            let stationTotal = 0;
            sorted.forEach(r => {
                const liters = getMeterLitersByFuelType(r, r.stationId);
                let vol = fuelType ? (liters[fuelType] || 0) : Object.values(liters).reduce((s, v) => s + v, 0);
                if (vol === 0) return;
                stationTotal += vol;
                allRows.push({ cells: [formatDateThai(r.date), getStationName(sid), fmt(vol)], _sort: r.date + sid, clickable: `showRecordSummaryPopup('${r.stationId}','${r.date}')`, stationId: r.stationId, date: r.date });
            });
            if (stationTotal > 0) {
                allRows.push({ cells: ['', '<b>รวม ' + getStationName(sid) + '</b>', '<b>' + fmt(stationTotal) + '</b>'], _sort: 'zzz' + sid, isSubtotal: true });
            }
        });
        const label = fuelType ? (REF.fuelTypeLabels[fuelType] || fuelType) : 'ทุกชนิด';
        showDrillDown('ปริมาณขายน้ำมัน: ' + label + ' — รายวัน',
            [{ label: 'วันที่' }, { label: 'สาขา' }, { label: 'ลิตร', num: true }], allRows);

    } else if (type === 'fuelReceived') {
        const fuelType = arguments[1];
        const allRows = [];
        Object.entries(byStation).forEach(([sid, recs]) => {
            const sorted = [...recs].sort((a, b) => a.date.localeCompare(b.date));
            const stTanks = REF.tanks.filter(t => t.stationId === sid);
            let stationTotal = 0;
            sorted.forEach(r => {
                if (!r.stockEntries) return;
                let vol = 0;
                stTanks.forEach(tank => {
                    if (fuelType && tank.fuelType !== fuelType) return;
                    const se = r.stockEntries[tank.key];
                    if (se) vol += parseNum(se.fuelAdded);
                });
                if (vol === 0) return;
                stationTotal += vol;
                allRows.push({ cells: [formatDateThai(r.date), getStationName(sid), fmt(vol)], _sort: r.date + sid, clickable: `showRecordSummaryPopup('${r.stationId}','${r.date}')`, stationId: r.stationId, date: r.date });
            });
            if (stationTotal > 0) {
                allRows.push({ cells: ['', '<b>รวม ' + getStationName(sid) + '</b>', '<b>' + fmt(stationTotal) + '</b>'], _sort: 'zzz' + sid, isSubtotal: true });
            }
        });
        const label = fuelType ? (REF.fuelTypeLabels[fuelType] || fuelType) : 'ทุกชนิด';
        showDrillDown('ปริมาณรับน้ำมัน: ' + label + ' — รายวัน',
            [{ label: 'วันที่' }, { label: 'สาขา' }, { label: 'ลิตร', num: true }], allRows);
    }
}

// ===== CHART DRILL-DOWN =====
function showDrillDown(title, headers, rows) {
    // Remove existing drill-down page
    let page = document.getElementById('drillDownPage');
    if (page) page.remove();

    // Separate data rows from subtotal rows for totals calculation
    const dataRows = rows.filter(r => !r.isSubtotal);
    const totals = headers.map((h, i) => {
        if (!h.num) return null;
        let sum = 0;
        dataRows.forEach(r => {
            const raw = String(r.cells[i]).replace(/<[^>]*>/g, '').replace(/,/g, '');
            const n = parseFloat(raw);
            if (!isNaN(n)) sum += n;
        });
        return sum;
    });

    const headerCells = headers.map(h => `<th${h.num ? ' class="number"' : ''}>${h.label}</th>`).join('');
    const totalRow = `<tr class="drill-total-row">${headers.map((h, i) => {
        if (i === 0) return `<td><strong>รวมทั้งหมด (${dataRows.length} รายการ)</strong></td>`;
        if (h.num && totals[i] !== null) return `<td class="number"><strong>${fmt(totals[i])}</strong></td>`;
        return '<td></td>';
    }).join('')}${Auth.isAdmin() ? '<td></td>' : ''}</tr>`;
    const bodyRows = rows.map(r => {
        const cells = r.cells.map((c, i) => `<td${headers[i] && headers[i].num ? ' class="number"' : ''}>${c}</td>`).join('');
        const rowStyle = r.isSubtotal ? ' style="background:#f0f9ff;border-top:2px solid var(--gray-300)"' : '';
        const clickAttr = r.clickable ? ` class="table-row-clickable" onclick="${r.clickable}"` : '';
        const editBtn = Auth.isAdmin() && r.stationId && r.date
            ? `<td><button class="btn btn-sm" onclick="closeDrillDown();loadRecord('${r.stationId}','${r.date}')">แก้ไข</button></td>`
            : Auth.isAdmin() ? '<td></td>' : '';
        return `<tr${rowStyle}${clickAttr}>${cells}${editBtn}</tr>`;
    }).join('');

    page = document.createElement('div');
    page.id = 'drillDownPage';
    page.className = 'drill-fullpage';
    page.innerHTML = `
        <div class="drill-fullpage-header">
            <button class="btn btn-outline drill-back-btn" onclick="closeDrillDown()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                กลับ
            </button>
            <h2>${title}</h2>
            <div class="drill-record-count">${dataRows.length} รายการ</div>
        </div>
        <div class="drill-fullpage-body">
            <div class="table-wrapper">
                <table>
                    <thead><tr>${headerCells}${Auth.isAdmin() ? '<th></th>' : ''}</tr></thead>
                    <tbody>
                        ${totalRow}
                        ${bodyRows || '<tr><td colspan="99" class="empty-state">ไม่มีข้อมูล</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;
    document.body.appendChild(page);
    requestAnimationFrame(() => page.classList.add('active'));
}

function showRecordSummaryPopup(stationId, date) {
    const record = DB.getDailyRecord(stationId, date);
    if (!record) { showToast('ไม่พบข้อมูลรายการนี้', 'error'); return; }

    const fuelPrices = hasFuelPrices(record.fuelPrices) ? record.fuelPrices : DB.getFuelPrices();
    const tanks = REF.tanks.filter(t => t.stationId === stationId);
    const stationName = getStationName(stationId);

    // Fuel sales by type
    const fuelSalesByType = {};
    tanks.forEach(function(tank) {
        const meters = REF.meters.filter(m => m.tankKey === tank.key);
        const liters = meters.reduce(function(sum, m) {
            const r = (record.meterReadings || {})[m.id] || {};
            return sum + Math.max(0, parseNum(r.end) - parseNum(r.start));
        }, 0);
        if (!fuelSalesByType[tank.fuelType]) fuelSalesByType[tank.fuelType] = { liters: 0, price: parseNum(fuelPrices[tank.fuelType]) };
        fuelSalesByType[tank.fuelType].liters += liters;
    });
    var fuelSalesValue = 0;
    Object.keys(fuelSalesByType).forEach(function(ft) {
        fuelSalesByType[ft].total = fuelSalesByType[ft].liters * fuelSalesByType[ft].price;
        fuelSalesValue += fuelSalesByType[ft].total;
    });

    // Product sales
    var lubricantSales = (record.productSales || []).reduce(function(sum, item) {
        var p = REF.products.find(function(pr) { return pr.id === item.productId; });
        return sum + (parseNum(item.quantity) * (p ? p.price : 0));
    }, 0);

    // Expenses
    var siteExpenses = (record.expenses || []).reduce(function(sum, e) { return sum + parseNum(e.amount); }, 0);

    // Internal usage
    var internalUsageTotal = (record.internalUsage || []).reduce(function(sum, item) {
        var tank = tanks.find(function(t) { return t.key === item.tankKey; });
        var ft = tank ? tank.fuelType : '';
        var price = ft ? parseNum(fuelPrices[ft]) : 0;
        return sum + (parseNum(item.liters) * price);
    }, 0);

    // Finance
    var fin = record.finance || {};
    var otherIncome = parseNum(fin.otherIncome);
    var totalGross = fuelSalesValue + lubricantSales + otherIncome;
    var creditSales = (record.creditCustomers || []).reduce(function(s, c) { return s + parseNum(c.amount); }, 0);
    var creditCard = parseNum(fin.creditCardAmt);
    var bluecard = parseNum(fin.bluecardAmt);
    var qrTransfer = parseNum(fin.qrTransferAmt);
    var tradeDiscount = parseNum(fin.tradeDiscount) || parseNum(fin.discounts);
    var totalDeductions = creditSales + creditCard + bluecard + qrTransfer + tradeDiscount + siteExpenses + internalUsageTotal;
    var expectedCash = totalGross - totalDeductions;
    var cashDay = parseNum(fin.cashDay);
    var cashNight = parseNum(fin.cashNight);
    var actualCash = cashDay + cashNight;
    var cashVariance = actualCash - expectedCash;

    // Fuel received
    var fuelReceivedHtml = '';
    var totalReceived = 0;
    tanks.forEach(function(tank) {
        var se = (record.stockEntries || {})[tank.key];
        if (se && parseNum(se.fuelAdded) > 0) {
            var added = parseNum(se.fuelAdded);
            totalReceived += added;
            fuelReceivedHtml += '<tr><td>' + (REF.fuelTypeLabels[tank.fuelType] || tank.fuelType) + '</td>'
                + '<td>' + (tank.label || tank.key) + '</td>'
                + '<td class="number">' + fmt(added) + '</td></tr>';
        }
    });

    // Credit customers
    var creditCustHtml = '';
    (record.creditCustomers || []).forEach(function(c) {
        creditCustHtml += '<tr><td>' + (c.name || '-') + '</td>'
            + '<td>' + (REF.fuelTypeLabels[c.fuelType] || c.fuelType || '-') + '</td>'
            + '<td class="number">' + fmt(c.liters) + '</td>'
            + '<td class="number">' + fmt(c.amount) + '</td>'
            + '<td>' + (c.refNo || '-') + '</td></tr>';
    });

    // Expenses detail
    var expenseHtml = '';
    (record.expenses || []).forEach(function(e) {
        expenseHtml += '<tr><td>' + (e.category || '-') + '</td><td>' + (e.description || '-') + '</td><td class="number">' + fmt(e.amount) + '</td></tr>';
    });

    // Internal usage detail
    var internalHtml = '';
    (record.internalUsage || []).forEach(function(item) {
        var tank = tanks.find(function(t) { return t.key === item.tankKey; });
        var ftLabel = tank ? (REF.fuelTypeLabels[tank.fuelType] || tank.fuelType) : '-';
        internalHtml += '<tr><td>' + ftLabel + '</td><td class="number">' + fmt(item.liters) + '</td><td>' + (item.description || '-') + '</td></tr>';
    });

    // Build fuel sales rows
    var fuelRows = '';
    Object.keys(fuelSalesByType).forEach(function(ft) {
        var d = fuelSalesByType[ft];
        var label = REF.fuelTypeLabels[ft] || ft;
        fuelRows += '<tr><td>' + label + '</td><td class="number">' + fmt(d.liters) + '</td>'
            + '<td class="number">' + fmt(d.price) + '</td><td class="number">' + fmt(d.total) + '</td></tr>';
    });

    var modal = document.getElementById('recordSummaryPopup');
    if (modal) modal.remove();
    modal = document.createElement('div');
    modal.id = 'recordSummaryPopup';
    modal.className = 'drill-fullpage';

    var varianceClass = cashVariance >= 0 ? 'color:var(--success-600)' : 'color:var(--danger-600)';
    var varianceLabel = cashVariance >= 0 ? 'เกิน' : 'ขาด';

    modal.innerHTML = '<div class="drill-fullpage-header">'
        + '<button class="btn btn-outline drill-back-btn" onclick="document.getElementById(\'recordSummaryPopup\').remove()">'
        + '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> กลับ</button>'
        + '<h2>สรุปรายการ: ' + stationName + ' — ' + formatDateThai(date) + '</h2>'
        + (Auth.isAdmin() ? '<button class="btn btn-sm btn-primary" onclick="document.getElementById(\'recordSummaryPopup\').remove();closeDrillDown();loadRecord(\'' + stationId + '\',\'' + date + '\')">แก้ไขรายการ</button>' : '')
        + '</div>'
        + '<div class="drill-fullpage-body">'

        // Summary cards
        + '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px">'
        + '<div style="background:var(--primary-50);border-radius:8px;padding:12px;text-align:center">'
        + '<div style="font-size:0.75rem;color:var(--gray-500)">รายได้รวม</div>'
        + '<div style="font-size:1.2rem;font-weight:700;color:var(--primary-600)">' + fmt(totalGross) + '</div></div>'
        + '<div style="background:var(--warning-50);border-radius:8px;padding:12px;text-align:center">'
        + '<div style="font-size:0.75rem;color:var(--gray-500)">รวมหัก</div>'
        + '<div style="font-size:1.2rem;font-weight:700;color:var(--warning-600)">' + fmt(totalDeductions) + '</div></div>'
        + '<div style="background:var(--gray-50);border-radius:8px;padding:12px;text-align:center">'
        + '<div style="font-size:0.75rem;color:var(--gray-500)">ยอดต้องส่ง</div>'
        + '<div style="font-size:1.2rem;font-weight:700">' + fmt(expectedCash) + '</div></div>'
        + '<div style="background:' + (cashVariance >= 0 ? 'var(--success-50)' : 'var(--danger-50,#fef2f2)') + ';border-radius:8px;padding:12px;text-align:center">'
        + '<div style="font-size:0.75rem;color:var(--gray-500)">ส่วนต่าง (' + varianceLabel + ')</div>'
        + '<div style="font-size:1.2rem;font-weight:700;' + varianceClass + '">' + fmt(Math.abs(cashVariance)) + '</div></div>'
        + '</div>'

        // Fuel sales
        + '<div class="card" style="margin-bottom:12px"><div class="card-header"><h3>รายได้จากน้ำมัน</h3></div>'
        + '<div class="table-wrapper"><table><thead><tr><th>ชนิด</th><th class="number">ลิตร</th><th class="number">ราคา/ลิตร</th><th class="number">จำนวนเงิน</th></tr></thead>'
        + '<tbody>' + fuelRows
        + '<tr class="drill-total-row"><td><strong>รวม</strong></td><td></td><td></td><td class="number"><strong>' + fmt(fuelSalesValue) + '</strong></td></tr>'
        + '</tbody></table></div></div>'

        // Income & Deductions side by side
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">'

        // Income
        + '<div class="card"><div class="card-header"><h3>รายได้</h3></div>'
        + '<div style="padding:12px">'
        + '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--gray-100)"><span>รายได้น้ำมัน</span><span style="font-weight:600">' + fmt(fuelSalesValue) + '</span></div>'
        + '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--gray-100)"><span>รายได้สินค้า</span><span style="font-weight:600">' + fmt(lubricantSales) + '</span></div>'
        + '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--gray-100)"><span>รายได้อื่นๆ</span><span style="font-weight:600">' + fmt(otherIncome) + '</span></div>'
        + '<div style="display:flex;justify-content:space-between;padding:8px 0;font-weight:700;font-size:1.1rem;color:var(--primary-600)"><span>รวมรายได้</span><span>' + fmt(totalGross) + '</span></div>'
        + '</div></div>'

        // Deductions
        + '<div class="card"><div class="card-header"><h3>รายการหัก</h3></div>'
        + '<div style="padding:12px">'
        + '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--gray-100)"><span>เงินเชื่อ</span><span style="font-weight:600">' + fmt(creditSales) + '</span></div>'
        + '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--gray-100)"><span>เครดิตการ์ด</span><span style="font-weight:600">' + fmt(creditCard) + '</span></div>'
        + '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--gray-100)"><span>Bluecard</span><span style="font-weight:600">' + fmt(bluecard) + '</span></div>'
        + '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--gray-100)"><span>เงินโอน/QR</span><span style="font-weight:600">' + fmt(qrTransfer) + '</span></div>'
        + '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--gray-100)"><span>ส่วนลดทางการค้า</span><span style="font-weight:600">' + fmt(tradeDiscount) + '</span></div>'
        + '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--gray-100)"><span>ค่าใช้จ่าย</span><span style="font-weight:600">' + fmt(siteExpenses) + '</span></div>'
        + '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--gray-100)"><span>ใช้ภายใน</span><span style="font-weight:600">' + fmt(internalUsageTotal) + '</span></div>'
        + '<div style="display:flex;justify-content:space-between;padding:8px 0;font-weight:700;font-size:1.1rem;color:var(--danger-600,#ef4444)"><span>รวมหัก</span><span>' + fmt(totalDeductions) + '</span></div>'
        + '</div></div>'
        + '</div>'

        // Cash section
        + '<div class="card" style="margin-bottom:12px"><div class="card-header"><h3>เงินส่ง</h3></div>'
        + '<div style="padding:12px">'
        + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px">'
        + '<div style="text-align:center;background:var(--gray-50);border-radius:8px;padding:12px"><div style="font-size:0.8rem;color:var(--gray-500)">กะกลางวัน</div><div style="font-size:1.1rem;font-weight:700">' + fmt(cashDay) + '</div></div>'
        + '<div style="text-align:center;background:var(--gray-50);border-radius:8px;padding:12px"><div style="font-size:0.8rem;color:var(--gray-500)">กะกลางคืน</div><div style="font-size:1.1rem;font-weight:700">' + fmt(cashNight) + '</div></div>'
        + '<div style="text-align:center;background:var(--primary-50);border-radius:8px;padding:12px"><div style="font-size:0.8rem;color:var(--gray-500)">รวมเงินส่งจริง</div><div style="font-size:1.1rem;font-weight:700;color:var(--primary-600)">' + fmt(actualCash) + '</div></div>'
        + '</div>'
        + '<div style="display:flex;justify-content:space-between;padding:8px 12px;font-weight:700;font-size:1.1rem;border-radius:8px;background:' + (cashVariance >= 0 ? 'var(--success-50)' : 'var(--danger-50,#fef2f2)') + ';' + varianceClass + '">'
        + '<span>ส่วนต่าง (' + varianceLabel + ')</span><span>' + fmt(Math.abs(cashVariance)) + '</span></div>'
        + (fin.remark ? '<div style="margin-top:8px;padding:8px 12px;background:var(--gray-50);border-radius:8px;font-size:0.9rem"><strong>หมายเหตุ:</strong> ' + fin.remark + '</div>' : '')
        + '</div></div>'

        // Detail sections (collapsible)
        + (fuelReceivedHtml ? '<div class="card" style="margin-bottom:12px"><div class="card-header" style="cursor:pointer" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\'none\'?\'block\':\'none\'"><h3>▶ รับน้ำมันเข้า (' + fmt(totalReceived) + ' ลิตร)</h3></div>'
        + '<div style="display:none"><div class="table-wrapper"><table><thead><tr><th>ชนิด</th><th>ถัง</th><th class="number">ลิตร</th></tr></thead><tbody>' + fuelReceivedHtml + '</tbody></table></div></div></div>' : '')

        + (creditCustHtml ? '<div class="card" style="margin-bottom:12px"><div class="card-header" style="cursor:pointer" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\'none\'?\'block\':\'none\'"><h3>▶ ลูกหนี้เงินเชื่อ (' + (record.creditCustomers || []).length + ' รายการ)</h3></div>'
        + '<div style="display:none"><div class="table-wrapper"><table><thead><tr><th>ชื่อ</th><th>ชนิด</th><th class="number">ลิตร</th><th class="number">จำนวนเงิน</th><th>อ้างอิง</th></tr></thead><tbody>' + creditCustHtml + '</tbody></table></div></div></div>' : '')

        + (expenseHtml ? '<div class="card" style="margin-bottom:12px"><div class="card-header" style="cursor:pointer" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\'none\'?\'block\':\'none\'"><h3>▶ ค่าใช้จ่าย (' + fmt(siteExpenses) + ' บาท)</h3></div>'
        + '<div style="display:none"><div class="table-wrapper"><table><thead><tr><th>หมวด</th><th>รายละเอียด</th><th class="number">จำนวนเงิน</th></tr></thead><tbody>' + expenseHtml + '</tbody></table></div></div></div>' : '')

        + (internalHtml ? '<div class="card" style="margin-bottom:12px"><div class="card-header" style="cursor:pointer" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display===\'none\'?\'block\':\'none\'"><h3>▶ ใช้ภายในสถานี (' + fmt(internalUsageTotal) + ' บาท)</h3></div>'
        + '<div style="display:none"><div class="table-wrapper"><table><thead><tr><th>ชนิด</th><th class="number">ลิตร</th><th>รายละเอียด</th></tr></thead><tbody>' + internalHtml + '</tbody></table></div></div></div>' : '')

        + '</div>';

    document.body.appendChild(modal);
    requestAnimationFrame(function() { modal.classList.add('active'); });
}

function closeDrillDown() {
    const page = document.getElementById('drillDownPage');
    if (page) {
        page.classList.remove('active');
        setTimeout(() => page.remove(), 200);
    }
}

function chartClickHandler(chartKey, chart, evt) {
    const points = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
    if (points.length === 0) return;
    const idx = points[0].index;
    const records = getFilteredRecords();
    if (records.length === 0) return;

    if (chartKey === 'fuelVolume') {
        // Drill: fuel type → daily breakdown
        const fuelVolumes = {};
        records.forEach(r => {
            const liters = getMeterLitersByFuelType(r, r.stationId);
            Object.entries(liters).forEach(([ft, vol]) => {
                if (!fuelVolumes[ft]) fuelVolumes[ft] = [];
                if (vol > 0) fuelVolumes[ft].push({ vol, r });
            });
        });
        const fuelKeys = Object.keys(fuelVolumes).sort((a, b) => {
            const totalA = fuelVolumes[a].reduce((s, x) => s + x.vol, 0);
            const totalB = fuelVolumes[b].reduce((s, x) => s + x.vol, 0);
            return totalB - totalA;
        });
        const ft = fuelKeys[idx];
        if (!ft) return;
        const label = REF.fuelTypeLabels[ft] || ft;
        const items = fuelVolumes[ft] || [];
        showDrillDown(`ปริมาณขาย: ${label}`,
            [{ label: 'วันที่' }, { label: 'สาขา' }, { label: 'ลิตร', num: true }],
            items.map(x => ({ cells: [formatDateThai(x.r.date), getStationName(x.r.stationId), fmt(x.vol)], stationId: x.r.stationId, date: x.r.date, clickable: `showRecordSummaryPopup('${x.r.stationId}','${x.r.date}')` }))
        );
    } else if (chartKey === 'variance') {
        // Drill: station → daily variance
        const byStation = {};
        records.forEach(r => {
            if (!byStation[r.stationId]) byStation[r.stationId] = [];
            byStation[r.stationId].push(r);
        });
        const stationIds = Object.keys(byStation);
        const sid = stationIds[idx];
        if (!sid) return;
        showDrillDown(`ส่วนต่างเงินส่ง: ${getStationName(sid)}`,
            [{ label: 'วันที่' }, { label: 'ยอดที่ต้องส่ง', num: true }, { label: 'ยอดจริง', num: true }, { label: 'ส่วนต่าง', num: true }],
            byStation[sid].map(r => {
                const f = r.finance || {};
                const v = (f.actualCashSent || 0) - (f.expectedCash || 0);
                return { cells: [formatDateThai(r.date), fmt(f.expectedCash), fmt(f.actualCashSent), `<span class="${v >= 0 ? 'variance-positive' : 'variance-negative'}">${fmt(v)}</span>`], stationId: r.stationId, date: r.date, clickable: `showRecordSummaryPopup('${r.stationId}','${r.date}')` };
            })
        );
    } else if (chartKey === 'revenue') {
        // Drill: category → daily records
        const categories = ['น้ำมัน', 'สินค้า/หล่อลื่น', 'อื่นๆ'];
        const cat = categories[idx];
        showDrillDown(`รายได้: ${cat}`,
            [{ label: 'วันที่' }, { label: 'สาขา' }, { label: 'จำนวน (บาท)', num: true }],
            records.map(r => {
                const f = r.finance || {};
                const val = idx === 0 ? f.fuelSalesValue || 0 : idx === 1 ? f.lubricantSales || 0 : parseNum(f.otherIncome);
                if (val === 0) return null;
                return { cells: [formatDateThai(r.date), getStationName(r.stationId), fmt(val)], stationId: r.stationId, date: r.date, clickable: `showRecordSummaryPopup('${r.stationId}','${r.date}')` };
            }).filter(Boolean)
        );
    } else if (chartKey === 'byStation') {
        // Drill: station → daily records
        const byStation = {};
        records.forEach(r => {
            if (!byStation[r.stationId]) byStation[r.stationId] = [];
            byStation[r.stationId].push(r);
        });
        const stationIds = Object.keys(byStation);
        const sid = stationIds[idx];
        if (!sid) return;
        showDrillDown(`รายได้: ${getStationName(sid)}`,
            [{ label: 'วันที่' }, { label: 'น้ำมัน', num: true }, { label: 'สินค้า', num: true }, { label: 'รวม', num: true }],
            byStation[sid].map(r => {
                const f = r.finance || {};
                return { cells: [formatDateThai(r.date), fmt(f.fuelSalesValue), fmt(f.lubricantSales), fmt(f.totalGrossIncome)], stationId: r.stationId, date: r.date, clickable: `showRecordSummaryPopup('${r.stationId}','${r.date}')` };
            })
        );
    } else if (chartKey === 'trend') {
        // Drill: date → records for that date
        const trend = aggregateByDate(records);
        const entry = trend[idx];
        if (!entry) return;
        const dateKey = entry[0];
        const dayRecords = records.filter(r => {
            if (dashboardState.period === 'year') return r.date.substring(0, 7) === dateKey;
            return r.date === dateKey;
        });
        showDrillDown(`รายการ: ${formatDateThai(dateKey)}`,
            [{ label: 'สาขา' }, { label: 'น้ำมัน', num: true }, { label: 'สินค้า', num: true }, { label: 'รวม', num: true }],
            dayRecords.map(r => {
                const f = r.finance || {};
                return { cells: [getStationName(r.stationId), fmt(f.fuelSalesValue), fmt(f.lubricantSales), fmt(f.totalGrossIncome)], stationId: r.stationId, date: r.date, clickable: `showRecordSummaryPopup('${r.stationId}','${r.date}')` };
            })
        );
    } else if (chartKey === 'expenses') {
        // Drill: expense category → detail
        const catMap = {};
        records.forEach(r => {
            (r.expenses || []).forEach(ex => {
                const cat = ex.category || 'อื่นๆ';
                if (!catMap[cat]) catMap[cat] = [];
                catMap[cat].push({ amount: parseNum(ex.amount), note: ex.note || '', r });
            });
        });
        const cats = Object.entries(catMap).filter(([, v]) => v.reduce((s, x) => s + x.amount, 0) > 0);
        const entry = cats[idx];
        if (!entry) return;
        showDrillDown(`ค่าใช้จ่าย: ${entry[0]}`,
            [{ label: 'วันที่' }, { label: 'สาขา' }, { label: 'จำนวน', num: true }, { label: 'หมายเหตุ' }],
            entry[1].map(x => ({ cells: [formatDateThai(x.r.date), getStationName(x.r.stationId), fmt(x.amount), x.note], stationId: x.r.stationId, date: x.r.date, clickable: `showRecordSummaryPopup('${x.r.stationId}','${x.r.date}')` }))
        );
    }
}

function renderDashboardCharts() {
    destroyAllCharts();
    const records = getFilteredRecords();
    if (records.length === 0) {
        document.querySelectorAll('.chart-container').forEach(el => {
            el.innerHTML = '<div class="chart-no-data">ไม่มีข้อมูลในช่วงเวลาที่เลือก</div>';
        });
        return;
    }

    const ds = dashboardState;
    const defaultFont = { family: "'Inter','Noto Sans Thai',sans-serif", size: 12 };
    Chart.defaults.font = defaultFont;
    Chart.defaults.color = '#64748b';

    // 1) Revenue breakdown
    (function() {
        let fuel = 0, products = 0, other = 0;
        records.forEach(r => { const f = r.finance || {}; fuel += f.fuelSalesValue || 0; products += f.lubricantSales || 0; other += parseNum(f.otherIncome); });
        const labels = ['น้ำมัน', 'สินค้า/หล่อลื่น', 'อื่นๆ'];
        const data = [fuel, products, other];
        const type = ds.chartTypes.revenue;
        const ctx = document.getElementById('chartRevenue');
        if (!ctx) return;
        const cfg = {
            type: type,
            data: {
                labels,
                datasets: [{
                    data,
                    backgroundColor: ['#4f46e5', '#06b6d4', '#10b981'],
                    borderColor: type === 'bar' ? ['#4f46e5', '#06b6d4', '#10b981'] : undefined,
                    borderWidth: type === 'bar' ? 0 : 2,
                    borderRadius: type === 'bar' ? 6 : 0,
                    label: 'รายได้ (บาท)',
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: type !== 'bar', position: 'bottom' } },
                scales: type === 'bar' ? { y: { beginAtZero: true, ticks: { callback: v => fmt(v) } } } : {},
            }
        };
        chartInstances.revenue = new Chart(ctx, cfg);
    })();

    // 2) By station
    (function() {
        const byStation = aggregateByStation(records);
        const stationIds = Object.keys(byStation);
        if (stationIds.length === 0) return;
        const labels = stationIds.map(id => getStationName(id));
        const data = stationIds.map(id => byStation[id].gross);
        const type = ds.chartTypes.byStation;
        const ctx = document.getElementById('chartByStation');
        if (!ctx) return;
        const colors = stationIds.map((_, i) => CHART_COLORS[i % CHART_COLORS.length]);
        chartInstances.byStation = new Chart(ctx, {
            type: type,
            data: {
                labels,
                datasets: [{ data, backgroundColor: colors, borderColor: colors, borderWidth: type === 'bar' ? 0 : 2, borderRadius: type === 'bar' ? 6 : 0, label: 'รายได้รวม (บาท)' }]
            },
            options: {
                responsive: true, maintainAspectRatio: false, indexAxis: type === 'bar' ? 'y' : undefined,
                plugins: { legend: { display: type !== 'bar', position: 'bottom' } },
                scales: type === 'bar' ? { x: { beginAtZero: true, ticks: { callback: v => fmt(v) } } } : {},
            }
        });
    })();

    // 3) Trend
    (function() {
        const trend = aggregateByDate(records);
        if (trend.length === 0) return;
        const labels = trend.map(([k]) => {
            if (ds.period === 'year') { const [y, m] = k.split('-'); return `${parseInt(m)}/${parseInt(y) + 543 - 2500}`; }
            return formatDateThai(k);
        });
        const type = ds.chartTypes.trend;
        const ctx = document.getElementById('chartTrend');
        if (!ctx) return;
        chartInstances.trend = new Chart(ctx, {
            type: type,
            data: {
                labels,
                datasets: [
                    { data: trend.map(([, v]) => v.fuel), label: 'น้ำมัน', borderColor: '#4f46e5', backgroundColor: 'rgba(79,70,229,0.1)', fill: type === 'line', tension: 0.3, borderWidth: 2, borderRadius: type === 'bar' ? 6 : 0, pointRadius: type === 'line' ? 3 : 0 },
                    { data: trend.map(([, v]) => v.products), label: 'สินค้า', borderColor: '#06b6d4', backgroundColor: 'rgba(6,182,212,0.1)', fill: false, tension: 0.3, borderWidth: 2, borderRadius: type === 'bar' ? 6 : 0, pointRadius: type === 'line' ? 3 : 0 },
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' } },
                scales: { y: { beginAtZero: true, ticks: { callback: v => fmt(v) } } },
            }
        });
    })();

    // 4) Expenses
    (function() {
        const cats = aggregateExpenseCategories(records);
        const entries = Object.entries(cats).filter(([, v]) => v > 0);
        if (entries.length === 0) {
            const ctx = document.getElementById('chartExpenses');
            if (ctx) ctx.parentElement.innerHTML = '<div class="chart-no-data">ไม่มีข้อมูลค่าใช้จ่าย</div>';
            return;
        }
        const labels = entries.map(([k]) => k);
        const data = entries.map(([, v]) => v);
        const type = ds.chartTypes.expenses;
        const ctx = document.getElementById('chartExpenses');
        if (!ctx) return;
        const colors = entries.map((_, i) => CHART_COLORS[i % CHART_COLORS.length]);
        chartInstances.expenses = new Chart(ctx, {
            type: type,
            data: {
                labels,
                datasets: [{ data, backgroundColor: colors, borderColor: type === 'bar' ? colors : '#fff', borderWidth: type === 'bar' ? 0 : 2, borderRadius: type === 'bar' ? 6 : 0, label: 'ค่าใช้จ่าย (บาท)' }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: type !== 'bar', position: 'bottom' } },
                scales: type === 'bar' ? { y: { beginAtZero: true, ticks: { callback: v => fmt(v) } } } : {},
            }
        });
    })();

    // 5) Variance by station
    (function() {
        const byStation = aggregateByStation(records);
        const stationIds = Object.keys(byStation);
        if (stationIds.length === 0) return;
        const labels = stationIds.map(id => getStationName(id));
        const data = stationIds.map(id => byStation[id].variance);
        const bgColors = data.map(v => v >= 0 ? '#059669' : '#dc2626');
        const type = ds.chartTypes.variance;
        const ctx = document.getElementById('chartVariance');
        if (!ctx) return;
        chartInstances.variance = new Chart(ctx, {
            type: type,
            data: {
                labels,
                datasets: [{
                    data, backgroundColor: bgColors, borderColor: type === 'line' ? '#4f46e5' : bgColors,
                    borderWidth: 2, borderRadius: type === 'bar' ? 6 : 0, label: 'ส่วนต่าง (บาท)',
                    pointBackgroundColor: bgColors, tension: 0.3,
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { ticks: { callback: v => fmt(v) } } },
            }
        });
    })();

    // 6) Fuel volume by type
    (function() {
        const fuelVolumes = {};
        records.forEach(r => {
            const liters = getMeterLitersByFuelType(r, r.stationId);
            Object.entries(liters).forEach(([ft, vol]) => {
                if (!fuelVolumes[ft]) fuelVolumes[ft] = 0;
                fuelVolumes[ft] += vol;
            });
        });
        const entries = Object.entries(fuelVolumes).filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]);
        if (entries.length === 0) {
            const ctx = document.getElementById('chartFuelVolume');
            if (ctx) ctx.parentElement.innerHTML = '<div class="chart-no-data">ไม่มีข้อมูลปริมาณขาย</div>';
            return;
        }
        const labels = entries.map(([k]) => REF.fuelTypeLabels[k] || k);
        const data = entries.map(([, v]) => v);
        const type = ds.chartTypes.fuelVolume;
        const ctx = document.getElementById('chartFuelVolume');
        if (!ctx) return;
        const colors = entries.map((_, i) => CHART_COLORS[i % CHART_COLORS.length]);
        chartInstances.fuelVolume = new Chart(ctx, {
            type: type,
            data: {
                labels,
                datasets: [{ data, backgroundColor: colors, borderColor: type === 'bar' ? colors : '#fff', borderWidth: type === 'bar' ? 0 : 2, borderRadius: type === 'bar' ? 6 : 0, label: 'ปริมาณขาย (ลิตร)' }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: type !== 'bar', position: 'bottom' } },
                scales: type === 'bar' ? { y: { beginAtZero: true, ticks: { callback: v => fmt(v) } } } : {},
            }
        });
    })();

    // 7) Fuel received by type
    (function() {
        const fuelReceivedAgg = {};
        records.forEach(r => {
            const tanks = REF.tanks.filter(t => t.stationId === r.stationId);
            tanks.forEach(tank => {
                const se = (r.stockEntries || {})[tank.key];
                if (se && parseNum(se.fuelAdded) > 0) {
                    if (!fuelReceivedAgg[tank.fuelType]) fuelReceivedAgg[tank.fuelType] = 0;
                    fuelReceivedAgg[tank.fuelType] += parseNum(se.fuelAdded);
                }
            });
        });
        const entries = Object.entries(fuelReceivedAgg).filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]);
        if (entries.length === 0) {
            const ctx = document.getElementById('chartFuelReceived');
            if (ctx) ctx.parentElement.innerHTML = '<div class="chart-no-data">ไม่มีข้อมูลปริมาณรับน้ำมัน</div>';
            return;
        }
        const labels = entries.map(([k]) => REF.fuelTypeLabels[k] || k);
        const data = entries.map(([, v]) => v);
        const type = ds.chartTypes.fuelReceived;
        const ctx = document.getElementById('chartFuelReceived');
        if (!ctx) return;
        const colors = entries.map((_, i) => CHART_COLORS[(i + 5) % CHART_COLORS.length]);
        chartInstances.fuelReceived = new Chart(ctx, {
            type: type,
            data: {
                labels,
                datasets: [{ data, backgroundColor: colors, borderColor: type === 'bar' ? colors : '#fff', borderWidth: type === 'bar' ? 0 : 2, borderRadius: type === 'bar' ? 6 : 0, label: 'ปริมาณรับ (ลิตร)' }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: type !== 'bar', position: 'bottom' } },
                scales: type === 'bar' ? { y: { beginAtZero: true, ticks: { callback: v => fmt(v) } } } : {},
            }
        });
    })();

    // Attach click drill-down to all charts
    Object.keys(chartInstances).forEach(key => {
        const ci = chartInstances[key];
        if (ci && ci.canvas) {
            ci.canvas.style.cursor = 'pointer';
            ci.canvas.onclick = (evt) => chartClickHandler(key, ci, evt);
        }
    });
}

function loadRecord(stationId, date) {
    if (!Auth.isAdmin()) { showToast('เฉพาะผู้ดูแลระบบเท่านั้นที่สามารถแก้ไขรายการได้', 'error'); return; }
    editingRecord = { stationId, date };
    navigateTo('daily-entry');
}

// ===== DAILY ENTRY (Main Form) =====
function renderDailyEntry(el) {
    const existing = editingRecord ? DB.getDailyRecord(editingRecord.stationId, editingRecord.date) : null;

    const selectedStation = existing ? existing.stationId : '';
    const selectedDate = existing ? existing.date : todayStr();
    const selectedStaff = existing ? existing.staffId : '';

    el.innerHTML = `
        <div class="card">
            <div class="card-header"><h3>ข้อมูลหลัก</h3></div>
            <div class="form-row">
                <div class="form-group">
                    <label>สาขา *</label>
                    <select id="entryStation" onchange="onStationChange()">
                        <option value="">-- เลือกสาขา --</option>
                        ${REF.stations.map(s => `<option value="${s.id}" ${s.id === selectedStation ? 'selected' : ''}>${s.name}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>วันที่ *</label>
                    ${thaiDateInput('entryDate', selectedDate, "onEntryDateChange()")}
                </div>
                <div class="form-group">
                    <label>ผู้บันทึก</label>
                    <select id="entryStaff">
                        <option value="">-- เลือก --</option>
                        ${REF.staff.map(s => `<option value="${s.id}" ${s.id === selectedStaff ? 'selected' : ''}>${s.name}</option>`).join('')}
                    </select>
                </div>
            </div>
        </div>

        <div id="entryTabs" style="${selectedStation ? '' : 'display:none'}">
            <div class="sub-tabs">
                <button class="sub-tab active" data-subtab="meters" onclick="switchSubTab(this)">1. มิเตอร์</button>
                <button class="sub-tab" data-subtab="stock" onclick="switchSubTab(this)">2. สต็อก</button>
                <button class="sub-tab" data-subtab="products" onclick="switchSubTab(this)">3. ขายสินค้า</button>
                <button class="sub-tab" data-subtab="productstock" onclick="switchSubTab(this)">4. สต็อกสินค้า</button>
                <button class="sub-tab" data-subtab="expenses" onclick="switchSubTab(this)">5. ค่าใช้จ่าย</button>
                <button class="sub-tab" data-subtab="creditcard" onclick="switchSubTab(this)">6. เครดิตการ์ด</button>
                <button class="sub-tab" data-subtab="bluecard" onclick="switchSubTab(this)">7. Bluecard</button>
                <button class="sub-tab" data-subtab="internalusage" onclick="switchSubTab(this)">8. ใช้ภายใน</button>
                <button class="sub-tab" data-subtab="credit" onclick="switchSubTab(this)">9. ลูกหนี้เงินเชื่อ</button>
                <button class="sub-tab" data-subtab="summary" onclick="switchSubTab(this)">10. สรุปบัญชี</button>
                <button class="sub-tab" data-subtab="taxinvoice" onclick="switchSubTab(this)">11. ใบกำกับภาษี</button>
            </div>

            <div id="subtab-meters" class="sub-tab-content active"></div>
            <div id="subtab-stock" class="sub-tab-content"></div>
            <div id="subtab-products" class="sub-tab-content"></div>
            <div id="subtab-productstock" class="sub-tab-content"></div>
            <div id="subtab-expenses" class="sub-tab-content"></div>
            <div id="subtab-creditcard" class="sub-tab-content"></div>
            <div id="subtab-bluecard" class="sub-tab-content"></div>
            <div id="subtab-internalusage" class="sub-tab-content"></div>
            <div id="subtab-summary" class="sub-tab-content"></div>
            <div id="subtab-taxinvoice" class="sub-tab-content"></div>
            <div id="subtab-credit" class="sub-tab-content"></div>

            <div class="form-actions">
                <button class="btn btn-primary" onclick="saveCurrentRecord()">บันทึกข้อมูล</button>
                <button class="btn btn-outline" onclick="editingRecord=null;navigateTo('dashboard')">ยกเลิก</button>
            </div>
        </div>
    `;

    if (selectedStation) {
        onStationChange(existing);
    }
}

function switchSubTab(btn) {
    document.querySelectorAll('.sub-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.sub-tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('subtab-' + btn.dataset.subtab).classList.add('active');

    const stationId = document.getElementById('entryStation').value;
    const tab = btn.dataset.subtab;
    if (tab === 'stock' && stationId) renderStockTab(stationId);
    if (tab === 'products') renderProductTab();
    if (tab === 'productstock') renderProductStockTab();
    if (tab === 'expenses') renderExpenseTab();
    if (tab === 'creditcard') renderCreditCardTab();
    if (tab === 'bluecard') renderBluecardTab();
    if (tab === 'internalusage') renderInternalUsageTab();
    if (tab === 'summary') renderSummaryTab();
    if (tab === 'taxinvoice') renderTaxInvoiceTab();
    if (tab === 'credit') renderCreditTab();
}

// Current form data in memory
let formData = {
    meterReadings: {},  // { meterId: { start, end } }
    stockEntries: {},   // { tankKey: { openingStock, fuelAdded, actualDip } }
    productSales: [],   // [{ productId, quantity }]
    productStockEntries: {},  // { productId: { openingStock, received, actualCount } }
    taxInvoices: { abbreviated: [], full: [] }, // ใบกำกับภาษี
    expenses: [],       // [{ category, amount, note, slip }]
    creditCardEntries: [],  // [{ amount, note, slip }]
    bluecardEntries: [],    // [{ amount, note, slip }]
    creditCustomers: [], // [{ name, cusCode, refNo, amount, fuelType, liters, licensePlate }]
    finance: {          // Finance summary inputs (manual fields)
        otherIncome: 0,
        creditSales: 0,
        creditCardAmt: 0,   // auto-calculated from creditCardEntries
        bluecardAmt: 0,     // auto-calculated from bluecardEntries
        qrTransferAmt: 0,
        discounts: 0,       // DEPRECATED - kept for old record compat
        tradeDiscount: 0,   // ส่วนลดทางการค้า (บาท)
        cashDay: 0,        // กะกลางวัน
        cashNight: 0,      // กะกลางคืน
        slipDay: null,      // สลิปกะกลางวัน (base64)
        slipNight: null,    // สลิปกะกลางคืน (base64)
        slipCreditCard: null, // สลิปบัตรเครดิต (base64)
        slipBluecard: null,   // สลิป Bluecard (base64)
        remark: '',
    },
};

// Find previous day's record and carry over meter-end → meter-start, stock-dip → opening-stock
function getPreviousDayData(stationId, dateStr) {
    const result = { meterReadings: {}, stockEntries: {}, productStockEntries: {} };

    // Search backwards up to 30 days for the most recent record
    const d = new Date(dateStr);
    let foundFuel = false;
    let foundProductStock = false;
    for (let i = 1; i <= 30; i++) {
        const prev = new Date(d);
        prev.setDate(prev.getDate() - i);
        const prevStr = prev.toISOString().split('T')[0];
        const prevRecord = DB.getDailyRecord(stationId, prevStr);
        if (prevRecord) {
            // Meter + fuel stock carry-over (only from most recent record)
            if (!foundFuel) {
                // Meter carry-over: previous end → current start
                if (prevRecord.meterReadings) {
                    Object.keys(prevRecord.meterReadings).forEach(meterId => {
                        const r = prevRecord.meterReadings[meterId];
                        if (r.end !== '' && r.end !== undefined && r.end !== null) {
                            result.meterReadings[meterId] = { start: r.end, end: '' };
                        }
                    });
                }
                // Stock carry-over: depends on whether current date is 1st of month
                // Use ALL tanks for this station (not just those in prevRecord) to prevent missing tanks
                const isFirstOfMonth = new Date(dateStr).getDate() === 1;
                const stationTanks = REF.tanks.filter(t => t.stationId === stationId);
                stationTanks.forEach(tank => {
                    const tankKey = tank.key;
                    const s = prevRecord.stockEntries ? prevRecord.stockEntries[tankKey] : null;
                    let carryValue = 0;
                    if (s) {
                        if (isFirstOfMonth) {
                            carryValue = parseNum(s.actualDip);
                        } else {
                            const openStock = parseNum(s.openingStock);
                            const fuelAdded = parseNum(s.fuelAdded);
                            const tankMeters = REF.meters.filter(m => m.tankKey === tankKey);
                            const totalSold = tankMeters.reduce((sum, m) => {
                                const mr = prevRecord.meterReadings ? prevRecord.meterReadings[m.id] : null;
                                if (!mr) return sum;
                                return sum + Math.max(0, parseNum(mr.end) - parseNum(mr.start));
                            }, 0);
                            carryValue = openStock + fuelAdded - totalSold;
                        }
                    }
                    carryValue = Math.round(carryValue * 100) / 100;
                    result.stockEntries[tankKey] = { openingStock: carryValue, fuelAdded: '', actualDip: '' };
                });
                foundFuel = true;
            }
            // Product stock carry-over (search independently — keep looking if this record has no meaningful data)
            if (!foundProductStock && prevRecord.productStockEntries && Object.keys(prevRecord.productStockEntries).length > 0) {
                // Check if any entry has actual stock value (openingStock or actualCount > 0)
                const hasRealStock = Object.values(prevRecord.productStockEntries).some(s =>
                    parseNum(s.openingStock) > 0 || parseNum(s.actualCount) > 0 || parseNum(s.received) > 0
                );
                if (hasRealStock) {
                    Object.keys(prevRecord.productStockEntries).forEach(productId => {
                        const s = prevRecord.productStockEntries[productId];
                        const sold = getProductSoldQtyFromRecord(prevRecord, productId);
                        const bookBalance = parseNum(s.openingStock) + parseNum(s.received) - sold;
                        let carryValue = parseNum(s.actualCount) > 0 ? parseNum(s.actualCount) : bookBalance;
                        carryValue = Math.round(carryValue * 100) / 100;
                        if (carryValue > 0) {
                            result.productStockEntries[productId] = { openingStock: carryValue, received: '', actualCount: '' };
                        }
                    });
                    foundProductStock = true;
                }
            }
            if (foundFuel && foundProductStock) break;
        }
    }
    return result;
}

// Helper: get sold quantity for a product from a saved record (not live formData)
function getProductSoldQtyFromRecord(record, productId) {
    if (!record.productSales) return 0;
    return record.productSales
        .filter(s => s.productId === productId)
        .reduce((sum, s) => sum + parseNum(s.quantity), 0);
}

// Track current station/date to auto-save when switching
let _currentEntryStation = '';
let _currentEntryDate = '';

function _autoSaveBeforeSwitch() {
    // Save current record before switching to different station/date
    // Calculate finance totals to ensure carry-forward data is complete
    if (_currentEntryStation && _currentEntryDate) {
        const staffId = document.getElementById('entryStaff') ? document.getElementById('entryStaff').value : '';

        // Calculate finance totals (same logic as saveCurrentRecord)
        const fuelPrices = hasFuelPrices(formData.fuelPrices) ? formData.fuelPrices : DB.getFuelPrices();
        const _tanks = REF.tanks.filter(t => t.stationId === _currentEntryStation);
        let fuelSalesValue = 0;
        _tanks.forEach(tank => {
            const _meters = REF.meters.filter(m => m.tankKey === tank.key);
            const liters = _meters.reduce((sum, m) => {
                const r = formData.meterReadings[m.id] || {};
                return sum + Math.max(0, parseNum(r.end) - parseNum(r.start));
            }, 0);
            fuelSalesValue += liters * parseNum(fuelPrices[tank.fuelType]);
        });
        const lubricantSales = (formData.productSales || []).reduce((sum, item) => {
            const p = REF.products.find(pr => pr.id === item.productId);
            return sum + (parseNum(item.quantity) * (p ? p.price : 0));
        }, 0);
        const siteExpenses = (formData.expenses || []).reduce((sum, e) => sum + parseNum(e.amount), 0);
        const _internalUsageTotal = (formData.internalUsage || []).reduce((sum, item) => {
            const tank = _tanks.find(t => t.key === item.tankKey);
            const ft = tank ? tank.fuelType : '';
            const price = ft ? parseNum(fuelPrices[ft]) : 0;
            return sum + (parseNum(item.liters) * price);
        }, 0);
        const creditSalesTotal = (formData.creditCustomers || []).reduce((s, c) => s + parseNum(c.amount), 0);
        const _ccTotal = (formData.creditCardEntries || []).reduce((s, e) => s + parseNum(e.amount), 0) || parseNum((formData.finance || {}).creditCardAmt);
        const _bcTotal = (formData.bluecardEntries || []).reduce((s, e) => s + parseNum(e.amount), 0) || parseNum((formData.finance || {}).bluecardAmt);
        const fin = formData.finance || {};
        fin.creditCardAmt = _ccTotal;
        fin.bluecardAmt = _bcTotal;
        const otherIncome = parseNum(fin.otherIncome);
        const totalGross = fuelSalesValue + lubricantSales + otherIncome;
        const tradeDiscountSave = parseNum(fin.tradeDiscount) || parseNum(fin.discounts);
        const totalDeductions = creditSalesTotal + _ccTotal +
            _bcTotal + parseNum(fin.qrTransferAmt) + tradeDiscountSave + siteExpenses + _internalUsageTotal;
        const expectedCash = totalGross - totalDeductions;

        const record = {
            stationId: _currentEntryStation,
            date: _currentEntryDate,
            staffId,
            fuelPrices: formData.fuelPrices || {},
            internalUsage: formData.internalUsage || [],
            meterReadings: formData.meterReadings,
            stockEntries: formData.stockEntries,
            productSales: formData.productSales,
            productStockEntries: formData.productStockEntries,
            taxInvoices: formData.taxInvoices,
            expenses: formData.expenses,
            creditCardEntries: formData.creditCardEntries || [],
            bluecardEntries: formData.bluecardEntries || [],
            creditCustomers: formData.creditCustomers,
            finance: {
                ...formData.finance,
                creditSales: creditSalesTotal,
                fuelSalesValue,
                lubricantSales,
                siteExpenses,
                totalGrossIncome: totalGross,
                totalDeductions,
                expectedCash,
                cashDay: parseNum(fin.cashDay),
                cashNight: parseNum(fin.cashNight),
                actualCashSent: parseNum(fin.cashDay) + parseNum(fin.cashNight),
                cashVariance: (parseNum(fin.cashDay) + parseNum(fin.cashNight)) - expectedCash,
            },
            updatedAt: new Date().toISOString(),
        };
        DB.saveDailyRecord(record);
    }
}

function onEntryDateChange() {
    const stationId = document.getElementById('entryStation').value;
    if (!stationId) return;
    // Update selectedDate to the new date
    selectedDate = document.getElementById('entryDate').value;
    // onStationChange will auto-save old station/date via _autoSaveBeforeSwitch
    onStationChange();
}

function onStationChange(existingRecord) {
    const stationId = document.getElementById('entryStation').value;
    const date = document.getElementById('entryDate').value;
    const tabsDiv = document.getElementById('entryTabs');

    if (!stationId) {
        tabsDiv.style.display = 'none';
        _currentEntryStation = '';
        _currentEntryDate = '';
        return;
    }

    // Auto-save previous station/date data before loading new one
    if (_currentEntryStation && _currentEntryDate &&
        (_currentEntryStation !== stationId || _currentEntryDate !== date)) {
        _autoSaveBeforeSwitch();
    }

    tabsDiv.style.display = '';

    // Initialize or load form data
    if (existingRecord) {
        formData = {
            meterReadings: existingRecord.meterReadings || {},
            stockEntries: existingRecord.stockEntries || {},
            productSales: existingRecord.productSales || [],
            productStockEntries: existingRecord.productStockEntries || {},
            taxInvoices: existingRecord.taxInvoices || { abbreviated: [], full: [] },
            expenses: existingRecord.expenses || [],
            creditCardEntries: existingRecord.creditCardEntries || [],
            bluecardEntries: existingRecord.bluecardEntries || [],
            creditCustomers: existingRecord.creditCustomers || [],
            finance: {
                otherIncome: 0, creditSales: 0, creditCardAmt: 0,
                bluecardAmt: 0, qrTransferAmt: 0, discounts: 0,
                tradeDiscount: 0,
                cashDay: 0, cashNight: 0, slipDay: null, slipNight: null, slipCreditCard: null, slipBluecard: null, remark: '',
                ...(existingRecord.finance || {}),
            },
            fuelPrices: hasFuelPrices(existingRecord.fuelPrices) ? existingRecord.fuelPrices : DB.getFuelPrices(),
            internalUsage: existingRecord.internalUsage || [],
        };
    } else {
        // Check if record exists for this station+date
        const date = document.getElementById('entryDate').value;
        const existing = DB.getDailyRecord(stationId, date);
        if (existing) {
            formData = {
                meterReadings: existing.meterReadings || {},
                stockEntries: existing.stockEntries || {},
                productSales: existing.productSales || [],
                productStockEntries: existing.productStockEntries || {},
                taxInvoices: existing.taxInvoices || { abbreviated: [], full: [] },
                expenses: existing.expenses || [],
                creditCardEntries: existing.creditCardEntries || [],
                bluecardEntries: existing.bluecardEntries || [],
                creditCustomers: existing.creditCustomers || [],
                finance: {
                    otherIncome: 0, creditSales: 0, creditCardAmt: 0,
                    bluecardAmt: 0, qrTransferAmt: 0, discounts: 0,
                    tradeDiscount: 0,
                    cashDay: 0, cashNight: 0, slipDay: null, slipNight: null, slipCreditCard: null, slipBluecard: null, remark: '',
                    ...(existing.finance || {}),
                },
                fuelPrices: hasFuelPrices(existing.fuelPrices) ? existing.fuelPrices : DB.getFuelPrices(),
                internalUsage: existing.internalUsage || [],
            };
        } else {
            // New record: carry over from previous day
            const prevData = getPreviousDayData(stationId, date);
            formData = {
                meterReadings: prevData.meterReadings,
                stockEntries: prevData.stockEntries,
                productSales: [],
                productStockEntries: prevData.productStockEntries || {},
                taxInvoices: { abbreviated: [], full: [] },
                expenses: [],
                creditCardEntries: [],
                bluecardEntries: [],
                creditCustomers: [],
                finance: { otherIncome: 0, creditSales: 0, creditCardAmt: 0, bluecardAmt: 0, qrTransferAmt: 0, discounts: 0, actualCashSent: 0, remark: '' },
                fuelPrices: DB.getFuelPrices(),
                internalUsage: [],
            };
        }
    }

    // Always sync meter start from previous day's end (ensure continuity)
    {
        const currentDate = document.getElementById('entryDate').value;
        const prevData = getPreviousDayData(stationId, currentDate);
        if (prevData.meterReadings && Object.keys(prevData.meterReadings).length > 0) {
            Object.keys(prevData.meterReadings).forEach(meterId => {
                const prevStart = prevData.meterReadings[meterId].start; // this is prev day's end
                if (prevStart !== '' && prevStart !== undefined && prevStart !== null) {
                    if (!formData.meterReadings[meterId]) {
                        formData.meterReadings[meterId] = { start: prevStart, end: '' };
                    } else {
                        formData.meterReadings[meterId].start = prevStart;
                    }
                }
            });
        }
        // Also sync stock opening from previous day
        if (prevData.stockEntries && Object.keys(prevData.stockEntries).length > 0) {
            Object.keys(prevData.stockEntries).forEach(tankKey => {
                const prevOpening = prevData.stockEntries[tankKey].openingStock;
                if (prevOpening !== '' && prevOpening !== undefined && prevOpening !== null && parseNum(prevOpening) > 0) {
                    if (!formData.stockEntries[tankKey]) {
                        formData.stockEntries[tankKey] = { openingStock: prevOpening, fuelAdded: '', actualDip: '' };
                    } else {
                        formData.stockEntries[tankKey].openingStock = prevOpening;
                    }
                }
            });
        }
    }

    // If loaded record has no meaningful product stock, supplement from carryover
    const hasRealProductStock = Object.values(formData.productStockEntries).some(s =>
        parseNum(s.openingStock) > 0 || parseNum(s.actualCount) > 0 || parseNum(s.received) > 0
    );
    if (!hasRealProductStock) {
        const prevData = getPreviousDayData(stationId, document.getElementById('entryDate').value);
        if (Object.keys(prevData.productStockEntries).length > 0) {
            formData.productStockEntries = prevData.productStockEntries;
        }
    }

    // Pre-initialize stock entries for all tanks in this station
    const allTanks = REF.tanks.filter(t => t.stationId === stationId);
    allTanks.forEach(tank => {
        if (!formData.stockEntries[tank.key]) {
            formData.stockEntries[tank.key] = { openingStock: '', fuelAdded: '', truckCode: '', actualDip: '' };
        }
    });

    // Track current station/date for auto-save on switch
    _currentEntryStation = stationId;
    _currentEntryDate = date;

    renderMeterTab(stationId);
    renderStockTab(stationId);
    renderProductTab();
    renderProductStockTab();
    renderExpenseTab();
}

// ===== METER TAB =====
function renderMeterTab(stationId) {
    const tanks = REF.tanks.filter(t => t.stationId === stationId);
    const el = document.getElementById('subtab-meters');

    let html = '<div class="card"><div class="card-header"><h3>บันทึกมิเตอร์</h3></div>';

    tanks.forEach(tank => {
        const meters = REF.meters.filter(m => m.tankKey === tank.key);
        if (meters.length === 0) return;

        const fuelLabel = REF.fuelTypeLabels[tank.fuelType] || tank.fuelType;

        html += `<div class="tank-group ${getFuelClass(tank.fuelType)}">
            <div class="tank-group-header">${tank.label} (${fuelLabel})</div>
            <div class="tank-group-body">
                <table>
                    <thead>
                        <tr>
                            <th>มือจ่าย</th>
                            <th class="number">เลขเริ่ม</th>
                            <th class="number">เลขสิ้นสุด</th>
                            <th class="number">ลิตรที่ขาย</th>
                        </tr>
                    </thead>
                    <tbody>`;

        meters.forEach(meter => {
            if (!formData.meterReadings[meter.id]) formData.meterReadings[meter.id] = { start: '', end: '' };
            const reading = formData.meterReadings[meter.id];
            const start = (reading.start != null && reading.start !== '') ? reading.start : '';
            const end = (reading.end != null && reading.end !== '') ? reading.end : '';
            const liters = (start !== '' && end !== '') ? (parseNum(end) - parseNum(start)) : 0;

            const warn = (start !== '' && end !== '') ? getMeterWarning(parseNum(start), parseNum(end)) : '';

            html += `<tr>
                <td>${meter.label} (${meter.id})</td>
                <td class="number"><input type="number" step="0.01" value="${start}"
                    data-meter="${meter.id}" data-field="start"
                    onchange="updateMeter(this)" onblur="formatMeterDecimal(this)"></td>
                <td class="number"><input type="number" step="0.01" value="${end}"
                    data-meter="${meter.id}" data-field="end"
                    onchange="updateMeter(this)" onblur="formatMeterDecimal(this)"></td>
                <td class="number" id="liters-${meter.id}">${fmt(liters)}</td>
            </tr>`;
            if (warn) {
                html += `<tr><td colspan="4" id="warn-${meter.id}">${warn}</td></tr>`;
            } else {
                html += `<tr style="display:none"><td colspan="4" id="warn-${meter.id}"></td></tr>`;
            }
        });

        // Tank total row
        let tankStartTotal = 0, tankEndTotal = 0, tankLiters = 0;
        meters.forEach(m => {
            const r = formData.meterReadings[m.id] || {};
            const s = parseNum(r.start), e = parseNum(r.end);
            tankStartTotal += s;
            tankEndTotal += e;
            tankLiters += Math.max(0, e - s);
        });

        html += `<tr class="table-row-summary">
            <td>รวม ${tank.label}</td>
            <td class="number" id="tank-start-${tank.key}">${fmt(tankStartTotal)}</td>
            <td class="number" id="tank-end-${tank.key}">${fmt(tankEndTotal)}</td>
            <td class="number" id="tank-total-${tank.key}">${fmt(tankLiters)}</td>
        </tr>`;

        html += `</tbody></table></div></div>`;
    });

    html += '</div>';
    el.innerHTML = html;
}

const METER_LITERS_THRESHOLD = 10000; // เตือนเมื่อลิตร > 10,000 ต่อมือจ่าย

function formatMeterDecimal(input) {
    if (input.value !== '') {
        input.value = parseFloat(input.value).toFixed(2);
        // Also update formData so saved value has 2 decimals
        const meterId = input.dataset.meter;
        const field = input.dataset.field;
        if (formData.meterReadings[meterId]) {
            formData.meterReadings[meterId][field] = input.value;
        }
    }
}

function getMeterWarning(start, end) {
    if (start === 0 && end === 0) return '';
    const liters = end - start;
    const warnings = [];
    if (start > 0 && end > 0 && liters < 0) {
        warnings.push('⚠️ เลขสิ้นสุดน้อยกว่าเลขเริ่มต้น (ลิตรติดลบ)');
    }
    if (liters > METER_LITERS_THRESHOLD) {
        warnings.push(`⚠️ ลิตรที่ขาย (${fmt(liters)}) เกิน ${fmt(METER_LITERS_THRESHOLD)} — กรุณาตรวจสอบ`);
    }
    if (warnings.length === 0) return '';
    return `<span class="meter-warning">${warnings.join('<br>')}</span>`;
}

function updateMeter(input) {
    const meterId = input.dataset.meter;
    const field = input.dataset.field;

    if (!formData.meterReadings[meterId]) {
        formData.meterReadings[meterId] = { start: '', end: '' };
    }
    formData.meterReadings[meterId][field] = input.value;

    // Update liters display
    const r = formData.meterReadings[meterId];
    const liters = (r.start !== '' && r.end !== '') ? Math.max(0, parseNum(r.end) - parseNum(r.start)) : 0;
    const litersEl = document.getElementById('liters-' + meterId);
    if (litersEl) litersEl.textContent = fmt(liters);

    // Update warning
    const warnEl = document.getElementById('warn-' + meterId);
    if (warnEl) {
        const warn = (r.start !== '' && r.end !== '') ? getMeterWarning(parseNum(r.start), parseNum(r.end)) : '';
        warnEl.innerHTML = warn;
        warnEl.parentElement.style.display = warn ? '' : 'none';
    }

    // Update tank totals (start, end, liters)
    const meter = REF.meters.find(m => m.id === meterId);
    if (meter) {
        const tankMeters = REF.meters.filter(m => m.tankKey === meter.tankKey);
        let startTotal = 0, endTotal = 0, litersTotal = 0;
        tankMeters.forEach(m => {
            const rd = formData.meterReadings[m.id] || {};
            const s = parseNum(rd.start), e = parseNum(rd.end);
            startTotal += s;
            endTotal += e;
            litersTotal += Math.max(0, e - s);
        });
        const startEl = document.getElementById('tank-start-' + meter.tankKey);
        const endEl = document.getElementById('tank-end-' + meter.tankKey);
        const totalEl = document.getElementById('tank-total-' + meter.tankKey);
        if (startEl) startEl.textContent = fmt(startTotal);
        if (endEl) endEl.textContent = fmt(endTotal);
        if (totalEl) totalEl.textContent = fmt(litersTotal);

        // Also update stock tab sold/book/variance for this tank
        const stockEntry = formData.stockEntries[meter.tankKey] || {};
        const stockSold = litersTotal;
        const stockOpen = parseNum(stockEntry.openingStock);
        const stockAdded = parseNum(stockEntry.fuelAdded);
        const stockBook = stockOpen + stockAdded - stockSold;
        const stockDip = parseNum(stockEntry.actualDip);
        const stockVar = stockDip > 0 ? stockDip - stockBook : 0;
        const soldEl = document.getElementById('stock-sold-' + meter.tankKey);
        const bookEl = document.getElementById('stock-book-' + meter.tankKey);
        const varEl = document.getElementById('stock-var-' + meter.tankKey);
        if (soldEl) soldEl.textContent = fmt(stockSold);
        if (bookEl) {
            bookEl.textContent = fmt(stockBook);
            bookEl.classList.toggle('stock-low-cell', stockBook > 0 && stockBook < 3000);
        }
        if (varEl) {
            varEl.textContent = fmt(stockVar);
            varEl.className = 'number ' + (stockVar >= 0 ? 'variance-positive' : 'variance-negative');
        }
    }
}

// ===== STOCK TAB =====
function renderStockTab(stationId) {
    const tanks = REF.tanks.filter(t => t.stationId === stationId);
    const el = document.getElementById('subtab-stock');

    let html = `<div class="card">
        <div class="card-header"><h3>บันทึกสต็อกน้ำมัน</h3>
            <button class="btn btn-sm btn-primary" onclick="printStockSummary()">🖨️ พิมพ์ใบสรุปสต็อก</button>
        </div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>ถัง</th>
                        <th>ประเภท</th>
                        <th class="number">สต็อกเปิด</th>
                        <th class="number">รับเพิ่ม</th>
                        <th>รหัสรถ</th>
                        <th class="number">ขาย (ลิตร)</th>
                        <th class="number">สต็อกตามบัญชี</th>
                        <th class="number">วัดจริง (Dip)</th>
                        <th class="number">ส่วนต่าง</th>
                    </tr>
                </thead>
                <tbody>`;

    tanks.forEach(tank => {
        const entry = formData.stockEntries[tank.key] || {};
        const fuelLabel = REF.fuelTypeLabels[tank.fuelType] || tank.fuelType;

        // Calculate total liters sold from meters
        const tankMeters = REF.meters.filter(m => m.tankKey === tank.key);
        const totalSold = tankMeters.reduce((sum, m) => {
            const r = formData.meterReadings[m.id] || {};
            return sum + Math.max(0, parseNum(r.end) - parseNum(r.start));
        }, 0);

        const openStock = parseNum(entry.openingStock);
        const fuelAdded = parseNum(entry.fuelAdded);
        const bookStock = openStock + fuelAdded - totalSold;
        const actualDip = parseNum(entry.actualDip);
        const variance = actualDip > 0 ? actualDip - bookStock : 0;

        const lowStock = bookStock > 0 && bookStock < 3000;
        html += `<tr class="${getFuelClass(tank.fuelType)}">
            <td>${tank.label}</td>
            <td>${fuelLabel}</td>
            <td class="number"><input type="number" step="0.01" value="${(entry.openingStock != null && entry.openingStock !== '') ? entry.openingStock : ''}"
                data-tank="${tank.key}" data-field="openingStock" onchange="updateStock(this)"></td>
            <td class="number"><input type="number" step="0.01" value="${(entry.fuelAdded != null && entry.fuelAdded !== '') ? entry.fuelAdded : ''}"
                data-tank="${tank.key}" data-field="fuelAdded" onchange="updateStock(this)"></td>
            <td><input type="text" value="${entry.truckCode || ''}" placeholder="รหัสรถ"
                data-tank="${tank.key}" data-field="truckCode" onchange="updateStock(this)" style="width:90px"></td>
            <td class="number" id="stock-sold-${tank.key}">${fmt(totalSold)}</td>
            <td class="number${lowStock ? ' stock-low-cell' : ''}" id="stock-book-${tank.key}">${fmt(bookStock)}</td>
            <td class="number"><input type="number" step="0.01" value="${(entry.actualDip != null && entry.actualDip !== '') ? entry.actualDip : ''}"
                data-tank="${tank.key}" data-field="actualDip" onchange="updateStock(this)"></td>
            <td class="number ${variance >= 0 ? 'variance-positive' : 'variance-negative'}" id="stock-var-${tank.key}">${fmt(variance)}</td>
        </tr>`;
    });

    html += '</tbody></table></div></div>';

    // Summary: fuel sales by type
    const fuelPrices = hasFuelPrices(formData.fuelPrices) ? formData.fuelPrices : DB.getFuelPrices();
    const salesByType = {};
    tanks.forEach(function(tank) {
        const tankMeters = REF.meters.filter(m => m.tankKey === tank.key);
        const sold = tankMeters.reduce(function(sum, m) {
            const r = formData.meterReadings[m.id] || {};
            return sum + Math.max(0, parseNum(r.end) - parseNum(r.start));
        }, 0);
        const entry = formData.stockEntries[tank.key] || {};
        const received = parseNum(entry.fuelAdded);
        const openStock = parseNum(entry.openingStock);
        const bookStock = openStock + received - sold;
        const actualDip = parseNum(entry.actualDip);
        const variance = actualDip > 0 ? actualDip - bookStock : 0;

        if (!salesByType[tank.fuelType]) {
            salesByType[tank.fuelType] = { liters: 0, received: 0, openStock: 0, bookStock: 0, actualDip: 0, variance: 0, price: parseNum(fuelPrices[tank.fuelType]) };
        }
        salesByType[tank.fuelType].liters += sold;
        salesByType[tank.fuelType].received += received;
        salesByType[tank.fuelType].openStock += openStock;
        salesByType[tank.fuelType].bookStock += bookStock;
        salesByType[tank.fuelType].actualDip += actualDip;
        salesByType[tank.fuelType].variance += variance;
    });

    var grandLiters = 0, grandAmount = 0, grandReceived = 0;
    var summaryRows = '';
    Object.keys(salesByType).forEach(function(ft) {
        var d = salesByType[ft];
        var amount = d.liters * d.price;
        grandLiters += d.liters;
        grandAmount += amount;
        grandReceived += d.received;
        var label = REF.fuelTypeLabels[ft] || ft;
        summaryRows += '<tr>'
            + '<td>' + label + '</td>'
            + '<td class="number">' + fmt(d.openStock) + '</td>'
            + '<td class="number">' + fmt(d.received) + '</td>'
            + '<td class="number" style="font-weight:600">' + fmt(d.liters) + '</td>'
            + '<td class="number">' + fmt(d.price) + '</td>'
            + '<td class="number" style="font-weight:600">' + fmt(amount) + '</td>'
            + '<td class="number">' + fmt(d.bookStock) + '</td>'
            + '<td class="number">' + fmt(d.actualDip) + '</td>'
            + '<td class="number ' + (d.variance >= 0 ? 'variance-positive' : 'variance-negative') + '">' + fmt(d.variance) + '</td>'
            + '</tr>';
    });

    html += '<div class="card" style="margin-top:16px">'
        + '<div class="card-header"><h3>สรุปยอดขายน้ำมันแยกตามชนิด</h3></div>'
        + '<div class="table-wrapper"><table>'
        + '<thead><tr><th>ชนิดน้ำมัน</th><th class="number">สต็อกเปิด</th><th class="number">รับเพิ่ม</th><th class="number">ขาย (ลิตร)</th><th class="number">ราคา/ลิตร</th><th class="number">จำนวนเงิน</th><th class="number">สต็อกตามบัญชี</th><th class="number">วัดจริง</th><th class="number">ส่วนต่าง</th></tr></thead>'
        + '<tbody>' + summaryRows
        + '<tr class="table-row-summary"><td><strong>รวมทั้งหมด</strong></td>'
        + '<td class="number"></td>'
        + '<td class="number"><strong>' + fmt(grandReceived) + '</strong></td>'
        + '<td class="number"><strong>' + fmt(grandLiters) + '</strong></td>'
        + '<td class="number"></td>'
        + '<td class="number"><strong>' + fmt(grandAmount) + '</strong></td>'
        + '<td class="number" colspan="3"></td>'
        + '</tr></tbody></table></div></div>';

    el.innerHTML = html;
}

function updateStock(input) {
    const tankKey = input.dataset.tank;
    const field = input.dataset.field;

    if (!formData.stockEntries[tankKey]) {
        formData.stockEntries[tankKey] = { openingStock: '', fuelAdded: '', truckCode: '', actualDip: '' };
    }
    formData.stockEntries[tankKey][field] = input.value;

    // Recalculate
    const entry = formData.stockEntries[tankKey];
    const tankMeters = REF.meters.filter(m => m.tankKey === tankKey);
    const totalSold = tankMeters.reduce((sum, m) => {
        const r = formData.meterReadings[m.id] || {};
        return sum + Math.max(0, parseNum(r.end) - parseNum(r.start));
    }, 0);

    const openStock = parseNum(entry.openingStock);
    const fuelAdded = parseNum(entry.fuelAdded);
    const bookStock = openStock + fuelAdded - totalSold;
    const actualDip = parseNum(entry.actualDip);
    const variance = actualDip > 0 ? actualDip - bookStock : 0;

    const soldEl = document.getElementById('stock-sold-' + tankKey);
    const bookEl = document.getElementById('stock-book-' + tankKey);
    const varEl = document.getElementById('stock-var-' + tankKey);
    if (soldEl) soldEl.textContent = fmt(totalSold);
    if (bookEl) bookEl.textContent = fmt(bookStock);
    if (varEl) {
        varEl.textContent = fmt(variance);
        varEl.className = 'number ' + (variance >= 0 ? 'variance-positive' : 'variance-negative');
    }
    // Low stock highlight on bookStock cell
    if (bookEl) {
        bookEl.classList.toggle('stock-low-cell', bookStock > 0 && bookStock < 3000);
    }
}

function printStockSummary() {
    var stationId = document.getElementById('entryStation').value;
    var dateStr = document.getElementById('entryDate').value;
    if (!stationId || !dateStr) return;

    var station = REF.stations.find(function(s) { return s.id === stationId; });
    var tanks = REF.tanks.filter(function(t) { return t.stationId === stationId; });
    var fuelPrices = hasFuelPrices(formData.fuelPrices) ? formData.fuelPrices : DB.getFuelPrices();

    // Stock detail rows
    var stockRows = '';
    tanks.forEach(function(tank) {
        var entry = formData.stockEntries[tank.key] || {};
        var tankMeters = REF.meters.filter(function(m) { return m.tankKey === tank.key; });
        var totalSold = tankMeters.reduce(function(sum, m) {
            var r = formData.meterReadings[m.id] || {};
            return sum + Math.max(0, parseNum(r.end) - parseNum(r.start));
        }, 0);
        var openStock = parseNum(entry.openingStock);
        var fuelAdded = parseNum(entry.fuelAdded);
        var bookStock = openStock + fuelAdded - totalSold;
        var actualDip = parseNum(entry.actualDip);
        var variance = actualDip > 0 ? actualDip - bookStock : 0;
        var varColor = variance >= 0 ? '#10b981' : '#ef4444';

        stockRows += '<tr>'
            + '<td>' + tank.label + '</td>'
            + '<td>' + (REF.fuelTypeLabels[tank.fuelType] || tank.fuelType) + '</td>'
            + '<td style="text-align:right">' + fmt(openStock) + '</td>'
            + '<td style="text-align:right">' + fmt(fuelAdded) + '</td>'
            + '<td>' + (entry.truckCode || '-') + '</td>'
            + '<td style="text-align:right;font-weight:bold">' + fmt(totalSold) + '</td>'
            + '<td style="text-align:right">' + fmt(bookStock) + '</td>'
            + '<td style="text-align:right">' + fmt(actualDip) + '</td>'
            + '<td style="text-align:right;color:' + varColor + ';font-weight:bold">' + fmt(variance) + '</td>'
            + '</tr>';
    });

    // Summary by fuel type
    var salesByType = {};
    tanks.forEach(function(tank) {
        var tankMeters = REF.meters.filter(function(m) { return m.tankKey === tank.key; });
        var sold = tankMeters.reduce(function(sum, m) {
            var r = formData.meterReadings[m.id] || {};
            return sum + Math.max(0, parseNum(r.end) - parseNum(r.start));
        }, 0);
        var entry = formData.stockEntries[tank.key] || {};
        var received = parseNum(entry.fuelAdded);
        var openStock = parseNum(entry.openingStock);
        var bookStock = openStock + received - sold;
        var actualDip = parseNum(entry.actualDip);
        var variance = actualDip > 0 ? actualDip - bookStock : 0;

        if (!salesByType[tank.fuelType]) {
            salesByType[tank.fuelType] = { liters: 0, received: 0, openStock: 0, bookStock: 0, actualDip: 0, variance: 0, price: parseNum(fuelPrices[tank.fuelType]) };
        }
        salesByType[tank.fuelType].liters += sold;
        salesByType[tank.fuelType].received += received;
        salesByType[tank.fuelType].openStock += openStock;
        salesByType[tank.fuelType].bookStock += bookStock;
        salesByType[tank.fuelType].actualDip += actualDip;
        salesByType[tank.fuelType].variance += variance;
    });

    var summaryRows = '';
    var grandLiters = 0, grandAmount = 0, grandReceived = 0;
    Object.keys(salesByType).forEach(function(ft) {
        var d = salesByType[ft];
        var amount = d.liters * d.price;
        grandLiters += d.liters;
        grandAmount += amount;
        grandReceived += d.received;
        var varColor = d.variance >= 0 ? '#10b981' : '#ef4444';
        summaryRows += '<tr>'
            + '<td>' + (REF.fuelTypeLabels[ft] || ft) + '</td>'
            + '<td style="text-align:right">' + fmt(d.openStock) + '</td>'
            + '<td style="text-align:right">' + fmt(d.received) + '</td>'
            + '<td style="text-align:right;font-weight:bold">' + fmt(d.liters) + '</td>'
            + '<td style="text-align:right">' + fmt(d.price) + '</td>'
            + '<td style="text-align:right;font-weight:bold">' + fmt(amount) + '</td>'
            + '<td style="text-align:right">' + fmt(d.bookStock) + '</td>'
            + '<td style="text-align:right">' + fmt(d.actualDip) + '</td>'
            + '<td style="text-align:right;color:' + varColor + ';font-weight:bold">' + fmt(d.variance) + '</td>'
            + '</tr>';
    });

    var printHtml = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>สรุปสต็อกน้ำมัน</title>'
        + '<style>'
        + 'body{font-family:"Sarabun",sans-serif;font-size:13px;margin:0;padding:20px;color:#333}'
        + '.header{text-align:center;margin-bottom:16px;border-bottom:2px solid #333;padding-bottom:12px}'
        + '.header h2{margin:0;font-size:18px}'
        + '.header h3{margin:4px 0;font-size:14px;font-weight:normal;color:#666}'
        + '.header .date{font-size:15px;font-weight:bold;margin-top:8px}'
        + 'table{width:100%;border-collapse:collapse;margin-bottom:16px}'
        + 'th,td{padding:5px 8px;border:1px solid #ccc;font-size:12px}'
        + 'th{background:#f5f5f5;font-weight:bold;text-align:left}'
        + '.section-title{font-weight:bold;font-size:14px;margin:16px 0 6px;padding:4px 0;border-bottom:1px solid #999}'
        + '.total-row{font-weight:bold;background:#f0f0f0}'
        + '.signature{margin-top:40px;display:flex;justify-content:space-around}'
        + '.signature div{text-align:center;width:200px}'
        + '.signature .line{border-bottom:1px solid #333;height:40px}'
        + '@media print{body{padding:10px}@page{size:A4 landscape;margin:10mm}}'
        + '</style>'
        + '<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;700&display=swap" rel="stylesheet">'
        + '</head><body>'

        // Header
        + '<div class="header">'
        + '<h2>' + (station ? station.businessName : '') + '</h2>'
        + '<h3>' + (station ? station.address : '') + '</h3>'
        + '<div class="date">ใบสรุปสต็อกน้ำมัน: ' + formatDateThai(dateStr) + '</div>'
        + '</div>'

        // Stock detail
        + '<div class="section-title">รายละเอียดสต็อกน้ำมันรายถัง</div>'
        + '<table><thead><tr><th>ถัง</th><th>ประเภท</th><th style="text-align:right">สต็อกเปิด</th><th style="text-align:right">รับเพิ่ม</th><th>รหัสรถ</th><th style="text-align:right">ขาย (ลิตร)</th><th style="text-align:right">สต็อกตามบัญชี</th><th style="text-align:right">วัดจริง</th><th style="text-align:right">ส่วนต่าง</th></tr></thead>'
        + '<tbody>' + stockRows + '</tbody></table>'

        // Summary by fuel type
        + '<div class="section-title">สรุปยอดขายน้ำมันแยกตามชนิด</div>'
        + '<table><thead><tr><th>ชนิดน้ำมัน</th><th style="text-align:right">สต็อกเปิด</th><th style="text-align:right">รับเพิ่ม</th><th style="text-align:right">ขาย (ลิตร)</th><th style="text-align:right">ราคา/ลิตร</th><th style="text-align:right">จำนวนเงิน</th><th style="text-align:right">สต็อกตามบัญชี</th><th style="text-align:right">วัดจริง</th><th style="text-align:right">ส่วนต่าง</th></tr></thead>'
        + '<tbody>' + summaryRows
        + '<tr class="total-row"><td>รวมทั้งหมด</td><td></td><td style="text-align:right">' + fmt(grandReceived) + '</td><td style="text-align:right">' + fmt(grandLiters) + '</td><td></td><td style="text-align:right">' + fmt(grandAmount) + '</td><td colspan="3"></td></tr>'
        + '</tbody></table>'

        // Signature
        + '<div class="signature">'
        + '<div><div class="line"></div><div>ผู้จัดทำ</div></div>'
        + '<div><div class="line"></div><div>ผู้ตรวจสอบ</div></div>'
        + '<div><div class="line"></div><div>ผู้อนุมัติ</div></div>'
        + '</div>'
        + '</body></html>';

    var printWin = window.open('', '_blank');
    printWin.document.write(printHtml);
    printWin.document.close();
    printWin.onload = function() { printWin.print(); };
}

// ===== PRODUCT SALES TAB =====
function renderProductTab() {
    const el = document.getElementById('subtab-products');
    let html = `<div class="card">
        <div class="card-header">
            <h3>ขายสินค้า / น้ำมันหล่อลื่น</h3>
        </div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>สินค้า</th>
                        <th class="number">จำนวน</th>
                        <th class="number">ราคา/หน่วย</th>
                        <th class="number">รวม</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="productRows">`;

    formData.productSales.forEach((item, idx) => {
        const product = REF.products.find(p => p.id === item.productId);
        const unitPrice = product ? product.price : parseNum(item.unitPrice);
        const total = parseNum(item.quantity) * unitPrice;

        html += `<tr>
            <td>
                <select data-idx="${idx}" onchange="updateProductRow(this, 'productId')">
                    <option value="">-- เลือกสินค้า --</option>
                    ${REF.products.map(p => `<option value="${p.id}" ${p.id === item.productId ? 'selected' : ''}>${p.name}</option>`).join('')}
                </select>
            </td>
            <td class="number"><input type="number" min="0" value="${item.quantity || ''}" data-idx="${idx}" onchange="updateProductRow(this, 'quantity')"></td>
            <td class="number">${fmt(unitPrice)}</td>
            <td class="number">${fmt(total)}</td>
            <td><button class="btn-delete-row" onclick="removeProductRow(${idx})">&#10005;</button></td>
        </tr>`;
    });

    const grandTotal = formData.productSales.reduce((sum, item) => {
        const p = REF.products.find(pr => pr.id === item.productId);
        return sum + (parseNum(item.quantity) * (p ? p.price : 0));
    }, 0);

    html += `</tbody>
            <tfoot>
                <tr class="table-row-summary">
                    <td colspan="3">รวมทั้งหมด</td>
                    <td class="number">${fmt(grandTotal)}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table></div>
        <div style="text-align:center;margin-top:8px">
            <button class="btn btn-outline btn-sm" onclick="addProductRow()">+ เพิ่มรายการ</button>
        </div></div>`;

    el.innerHTML = html;
}

function addProductRow() {
    formData.productSales.push({ productId: '', quantity: 1, unitPrice: 0 });
    renderProductTab();
}

function removeProductRow(idx) {
    formData.productSales.splice(idx, 1);
    renderProductTab();
    // Re-render product stock if visible (sales affect sold quantity)
    refreshProductStockIfVisible();
}

function updateProductRow(input, field) {
    const idx = parseInt(input.dataset.idx);
    if (field === 'productId') {
        formData.productSales[idx].productId = input.value;
        const p = REF.products.find(pr => pr.id === input.value);
        if (p) formData.productSales[idx].unitPrice = p.price;
    } else {
        formData.productSales[idx][field] = input.value;
    }
    renderProductTab();
    // Re-render product stock if visible (sales affect sold quantity)
    refreshProductStockIfVisible();
}

// ===== PRODUCT STOCK TAB =====

// Helper: get total sold quantity for a product from live formData
function getProductSoldQuantity(productId) {
    return formData.productSales
        .filter(s => s.productId === productId)
        .reduce((sum, s) => sum + parseNum(s.quantity), 0);
}

// Refresh product stock tab auto-calculated columns if it's currently visible
function refreshProductStockIfVisible() {
    const el = document.getElementById('subtab-productstock');
    if (el && el.classList.contains('active')) {
        renderProductStockTab();
    }
}

function renderProductStockTab() {
    const el = document.getElementById('subtab-productstock');
    if (!el) return;

    const entries = formData.productStockEntries;
    const productIds = Object.keys(entries);

    let html = `<div class="card">
        <div class="card-header">
            <h3>สต็อกสินค้า</h3>
        </div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>สินค้า</th>
                        <th class="number">ยกยอดมา</th>
                        <th class="number">รับเพิ่ม</th>
                        <th class="number">ขายออก</th>
                        <th class="number">คงเหลือ</th>
                        <th class="number">นับจริง</th>
                        <th class="number">ส่วนต่าง</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>`;

    if (productIds.length === 0) {
        html += `<tr><td colspan="8" style="text-align:center; color:var(--gray-400); padding:24px;">
            ยังไม่มีรายการสต็อกสินค้า — กดปุ่ม "+ เพิ่มสินค้า" เพื่อเริ่มบันทึก
        </td></tr>`;
    } else {
        productIds.forEach(productId => {
            const entry = entries[productId];
            const product = REF.products.find(p => p.id === productId);
            const productName = product ? product.name : productId;

            const openStock = parseNum(entry.openingStock);
            const received = parseNum(entry.received);
            const sold = getProductSoldQuantity(productId);
            const bookBalance = openStock + received - sold;
            const actualCount = parseNum(entry.actualCount);
            const variance = actualCount > 0 ? actualCount - bookBalance : 0;

            html += `<tr>
                <td>
                    <select data-product="${productId}" onchange="changeProductStockProduct(this, '${productId}')">
                        <option value="">-- เลือกสินค้า --</option>
                        ${REF.products.map(p => `<option value="${p.id}" ${p.id === productId ? 'selected' : ''}>${p.name}</option>`).join('')}
                    </select>
                </td>
                <td class="number"><input type="number" step="1" min="0" value="${entry.openingStock || ''}"
                    data-product="${productId}" data-field="openingStock" onchange="updateProductStock(this)"></td>
                <td class="number"><input type="number" step="1" min="0" value="${entry.received || ''}"
                    data-product="${productId}" data-field="received" onchange="updateProductStock(this)"></td>
                <td class="number" id="pstock-sold-${productId}">${sold}</td>
                <td class="number" id="pstock-book-${productId}">${fmt(bookBalance)}</td>
                <td class="number"><input type="number" step="1" min="0" value="${entry.actualCount || ''}"
                    data-product="${productId}" data-field="actualCount" onchange="updateProductStock(this)"></td>
                <td class="number ${actualCount > 0 ? (variance >= 0 ? 'variance-positive' : 'variance-negative') : ''}" id="pstock-var-${productId}">
                    ${actualCount > 0 ? fmt(variance) : '-'}
                </td>
                <td><button class="btn-delete-row" onclick="removeProductStockRow('${productId}')">&#10005;</button></td>
            </tr>`;
        });
    }

    // Grand totals row
    if (productIds.length > 0) {
        let totalOpen = 0, totalReceived = 0, totalSold = 0, totalBook = 0, totalActual = 0;
        productIds.forEach(pid => {
            const e = entries[pid];
            const o = parseNum(e.openingStock);
            const r = parseNum(e.received);
            const s = getProductSoldQuantity(pid);
            totalOpen += o;
            totalReceived += r;
            totalSold += s;
            totalBook += (o + r - s);
            totalActual += parseNum(e.actualCount);
        });

        html += `</tbody>
            <tfoot>
                <tr class="table-row-summary">
                    <td>รวมทั้งหมด</td>
                    <td class="number">${fmt(totalOpen)}</td>
                    <td class="number">${fmt(totalReceived)}</td>
                    <td class="number">${fmt(totalSold)}</td>
                    <td class="number">${fmt(totalBook)}</td>
                    <td class="number">${fmt(totalActual)}</td>
                    <td class="number">${totalActual > 0 ? fmt(totalActual - totalBook) : '-'}</td>
                    <td></td>
                </tr>
            </tfoot>`;
    } else {
        html += `</tbody>`;
    }

    html += `</table></div>
        <div style="text-align:center;margin-top:8px">
            <button class="btn btn-outline btn-sm" onclick="addProductStockRow()">+ เพิ่มสินค้า</button>
        </div>
    </div>`;
    el.innerHTML = html;
}

function updateProductStock(input) {
    const productId = input.dataset.product;
    const field = input.dataset.field;

    if (!formData.productStockEntries[productId]) {
        formData.productStockEntries[productId] = { openingStock: '', received: '', actualCount: '' };
    }
    formData.productStockEntries[productId][field] = input.value;

    // Full re-render to update all auto-calculated cells and totals
    renderProductStockTab();
}

function addProductStockRow() {
    // Find first product not already in entries
    const usedIds = Object.keys(formData.productStockEntries);
    const available = REF.products.find(p => !usedIds.includes(p.id));
    const newId = available ? available.id : '_new_' + Date.now();

    formData.productStockEntries[newId] = { openingStock: '', received: '', actualCount: '' };
    renderProductStockTab();
}

function removeProductStockRow(productId) {
    delete formData.productStockEntries[productId];
    renderProductStockTab();
}

function changeProductStockProduct(select, oldProductId) {
    const newProductId = select.value;
    if (!newProductId || newProductId === oldProductId) return;

    // If new product already exists in entries, warn
    if (formData.productStockEntries[newProductId]) {
        showToast('สินค้านี้มีในรายการแล้ว', 'error');
        select.value = oldProductId;
        return;
    }

    // Move data from old key to new key
    const data = formData.productStockEntries[oldProductId];
    delete formData.productStockEntries[oldProductId];
    formData.productStockEntries[newProductId] = data;
    renderProductStockTab();
}

// ===== EXPENSES TAB =====
function renderExpenseTab() {
    const el = document.getElementById('subtab-expenses');
    let html = `<div class="card">
        <div class="card-header">
            <h3>ค่าใช้จ่าย</h3>
        </div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>ประเภท</th>
                        <th class="number">จำนวนเงิน (บาท)</th>
                        <th>หมายเหตุ</th>
                        <th>หลักฐาน</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="expenseRows">`;

    formData.expenses.forEach((item, idx) => {
        html += `<tr>
            <td>
                <select data-idx="${idx}" onchange="updateExpenseRow(this, 'category')">
                    <option value="">-- เลือกประเภท --</option>
                    ${REF.expenseCategories.map(c => `<option value="${c}" ${c === item.category ? 'selected' : ''}>${c}</option>`).join('')}
                </select>
            </td>
            <td class="number"><input type="number" step="0.01" value="${item.amount || ''}" data-idx="${idx}" onchange="updateExpenseRow(this, 'amount')"></td>
            <td><input type="text" value="${item.note || ''}" data-idx="${idx}" onchange="updateExpenseRow(this, 'note')"></td>
            <td style="text-align:center">${item.slip
                ? '<div style="display:flex;align-items:center;gap:4px;justify-content:center"><img src="' + item.slip + '" style="width:36px;height:36px;border-radius:4px;cursor:pointer;object-fit:cover" onclick="previewSlip(this.src)"><button class="btn-delete-row" style="width:20px;height:20px;font-size:10px;padding:0" onclick="formData.expenses[' + idx + '].slip=null;renderExpenseTab()">✕</button></div>'
                : '<label class="btn btn-outline btn-sm" style="cursor:pointer;font-size:11px;padding:2px 6px"><input type="file" accept="image/*" style="display:none" onchange="attachExpenseSlip(this,' + idx + ')">📎 แนบ</label>'
            }</td>
            <td><button class="btn-delete-row" onclick="removeExpenseRow(${idx})">&#10005;</button></td>
        </tr>`;
    });

    const totalExpenses = formData.expenses.reduce((sum, e) => sum + parseNum(e.amount), 0);

    html += `</tbody>
            <tfoot>
                <tr class="table-row-summary">
                    <td>รวมค่าใช้จ่าย</td>
                    <td class="number">${fmt(totalExpenses)}</td>
                    <td colspan="3"></td>
                </tr>
            </tfoot>
        </table></div>
        <div style="text-align:center;margin-top:8px">
            <button class="btn btn-outline btn-sm" onclick="addExpenseRow()">+ เพิ่มรายการ</button>
        </div></div>`;

    el.innerHTML = html;
}

function addExpenseRow() {
    formData.expenses.push({ category: '', amount: 0, note: '' });
    renderExpenseTab();
}

function removeExpenseRow(idx) {
    formData.expenses.splice(idx, 1);
    renderExpenseTab();
}

function updateExpenseRow(input, field) {
    const idx = parseInt(input.dataset.idx);
    formData.expenses[idx][field] = input.value;
    if (field === 'amount') {
        // Update total
        const totalExpenses = formData.expenses.reduce((sum, e) => sum + parseNum(e.amount), 0);
        const foot = input.closest('table').querySelector('tfoot td.number');
        if (foot) foot.textContent = fmt(totalExpenses);
    }
}

// ===== CREDIT CARD TAB =====
function renderCreditCardTab() {
    const el = document.getElementById('subtab-creditcard');
    if (!el) return;
    if (!formData.creditCardEntries) formData.creditCardEntries = [];
    // Migrate from old single-value if entries empty but finance has value
    if (formData.creditCardEntries.length === 0 && parseNum(formData.finance.creditCardAmt) > 0) {
        formData.creditCardEntries.push({ amount: parseNum(formData.finance.creditCardAmt), note: '', slip: formData.finance.slipCreditCard || null });
        formData.finance.creditCardAmt = 0;
        formData.finance.slipCreditCard = null;
    }
    const totalAmt = formData.creditCardEntries.reduce(function(s, e) { return s + parseNum(e.amount); }, 0);
    let html = '<div class="card"><div class="card-header"><h3>รายการเครดิตการ์ด</h3></div>'
        + '<div class="table-wrapper"><table><thead><tr><th style="width:60px">ลำดับ</th><th class="number">จำนวนเงิน (บาท)</th><th>หมายเหตุ</th><th>หลักฐาน</th><th style="width:40px"></th></tr></thead><tbody>';
    formData.creditCardEntries.forEach(function(item, idx) {
        html += '<tr><td>' + (idx + 1) + '</td>'
            + '<td class="number"><input type="number" step="0.01" value="' + (item.amount || '') + '" data-idx="' + idx + '" onchange="updateCardEntry(\'creditCard\',' + idx + ',\'amount\',this.value)"></td>'
            + '<td><input type="text" value="' + (item.note || '') + '" data-idx="' + idx + '" onchange="updateCardEntry(\'creditCard\',' + idx + ',\'note\',this.value)" placeholder="เลขที่สลิป / หมายเหตุ"></td>'
            + '<td style="text-align:center">' + (item.slip
                ? '<div style="display:flex;align-items:center;gap:4px;justify-content:center"><img src="' + item.slip + '" style="width:36px;height:36px;border-radius:4px;cursor:pointer;object-fit:cover" onclick="previewSlip(this.src)"><button class="btn-delete-row" style="width:20px;height:20px;font-size:10px;padding:0" onclick="formData.creditCardEntries[' + idx + '].slip=null;renderCreditCardTab()">✕</button></div>'
                : '<label class="btn btn-outline btn-sm" style="cursor:pointer;font-size:11px;padding:2px 6px"><input type="file" accept="image/*" style="display:none" onchange="attachCardSlip(this,\'creditCard\',' + idx + ')">📎 แนบ</label>')
            + '</td>'
            + '<td><button class="btn-delete-row" onclick="formData.creditCardEntries.splice(' + idx + ',1);renderCreditCardTab()">✕</button></td>'
            + '</tr>';
    });
    html += '</tbody><tfoot><tr class="table-row-summary"><td>รวม</td><td class="number"><strong>' + fmt(totalAmt) + '</strong></td><td colspan="3"></td></tr></tfoot></table></div>'
        + '<div style="text-align:center;margin-top:8px"><button class="btn btn-outline btn-sm" onclick="formData.creditCardEntries.push({amount:0,note:\'\',slip:null});renderCreditCardTab()">+ เพิ่มรายการ</button></div></div>';
    el.innerHTML = html;
}

// ===== BLUECARD TAB =====
function renderBluecardTab() {
    const el = document.getElementById('subtab-bluecard');
    if (!el) return;
    if (!formData.bluecardEntries) formData.bluecardEntries = [];
    // Migrate from old single-value
    if (formData.bluecardEntries.length === 0 && parseNum(formData.finance.bluecardAmt) > 0) {
        formData.bluecardEntries.push({ amount: parseNum(formData.finance.bluecardAmt), note: '', slip: formData.finance.slipBluecard || null });
        formData.finance.bluecardAmt = 0;
        formData.finance.slipBluecard = null;
    }
    const totalAmt = formData.bluecardEntries.reduce(function(s, e) { return s + parseNum(e.amount); }, 0);
    let html = '<div class="card"><div class="card-header"><h3>รายการ Bluecard</h3></div>'
        + '<div class="table-wrapper"><table><thead><tr><th style="width:60px">ลำดับ</th><th class="number">จำนวนเงิน (บาท)</th><th>หมายเหตุ</th><th>หลักฐาน</th><th style="width:40px"></th></tr></thead><tbody>';
    formData.bluecardEntries.forEach(function(item, idx) {
        html += '<tr><td>' + (idx + 1) + '</td>'
            + '<td class="number"><input type="number" step="0.01" value="' + (item.amount || '') + '" data-idx="' + idx + '" onchange="updateCardEntry(\'bluecard\',' + idx + ',\'amount\',this.value)"></td>'
            + '<td><input type="text" value="' + (item.note || '') + '" data-idx="' + idx + '" onchange="updateCardEntry(\'bluecard\',' + idx + ',\'note\',this.value)" placeholder="เลขที่สลิป / หมายเหตุ"></td>'
            + '<td style="text-align:center">' + (item.slip
                ? '<div style="display:flex;align-items:center;gap:4px;justify-content:center"><img src="' + item.slip + '" style="width:36px;height:36px;border-radius:4px;cursor:pointer;object-fit:cover" onclick="previewSlip(this.src)"><button class="btn-delete-row" style="width:20px;height:20px;font-size:10px;padding:0" onclick="formData.bluecardEntries[' + idx + '].slip=null;renderBluecardTab()">✕</button></div>'
                : '<label class="btn btn-outline btn-sm" style="cursor:pointer;font-size:11px;padding:2px 6px"><input type="file" accept="image/*" style="display:none" onchange="attachCardSlip(this,\'bluecard\',' + idx + ')">📎 แนบ</label>')
            + '</td>'
            + '<td><button class="btn-delete-row" onclick="formData.bluecardEntries.splice(' + idx + ',1);renderBluecardTab()">✕</button></td>'
            + '</tr>';
    });
    html += '</tbody><tfoot><tr class="table-row-summary"><td>รวม</td><td class="number"><strong>' + fmt(totalAmt) + '</strong></td><td colspan="3"></td></tr></tfoot></table></div>'
        + '<div style="text-align:center;margin-top:8px"><button class="btn btn-outline btn-sm" onclick="formData.bluecardEntries.push({amount:0,note:\'\',slip:null});renderBluecardTab()">+ เพิ่มรายการ</button></div></div>';
    el.innerHTML = html;
}

function updateCardEntry(type, idx, field, value) {
    var arr = type === 'creditCard' ? formData.creditCardEntries : formData.bluecardEntries;
    if (!arr[idx]) return;
    arr[idx][field] = field === 'amount' ? value : value;
    // Update total in footer
    var total = arr.reduce(function(s, e) { return s + parseNum(e.amount); }, 0);
    var table = event.target.closest('table');
    if (table) {
        var foot = table.querySelector('tfoot .number strong');
        if (foot) foot.textContent = fmt(total);
    }
}

function attachCardSlip(input, type, idx) {
    var file = input.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = new Image();
        img.onload = function() {
            var canvas = document.createElement('canvas');
            var maxW = 800, maxH = 800;
            var w = img.width, h = img.height;
            if (w > maxW || h > maxH) {
                var ratio = Math.min(maxW / w, maxH / h);
                w = Math.round(w * ratio);
                h = Math.round(h * ratio);
            }
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            var arr = type === 'creditCard' ? formData.creditCardEntries : formData.bluecardEntries;
            arr[idx].slip = canvas.toDataURL('image/jpeg', 0.6);
            if (type === 'creditCard') renderCreditCardTab();
            else renderBluecardTab();
            showToast('แนบหลักฐานเรียบร้อย');
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function attachExpenseSlip(input, idx) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const maxW = 800, maxH = 800;
            let w = img.width, h = img.height;
            if (w > maxW || h > maxH) {
                const ratio = Math.min(maxW / w, maxH / h);
                w = Math.round(w * ratio);
                h = Math.round(h * ratio);
            }
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            formData.expenses[idx].slip = canvas.toDataURL('image/jpeg', 0.6);
            renderExpenseTab();
            showToast('แนบหลักฐานเรียบร้อย');
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// ===== INTERNAL USAGE TAB (ใช้ภายในสถานี) =====
function renderInternalUsageTab() {
    const el = document.getElementById('subtab-internalusage');
    if (!el) return;
    const stationId = document.getElementById('entryStation').value;
    const stationTanks = REF.tanks.filter(t => t.stationId === stationId);
    const fuelPrices = hasFuelPrices(formData.fuelPrices) ? formData.fuelPrices : DB.getFuelPrices();
    if (!formData.internalUsage) formData.internalUsage = [];

    let totalLiters = 0, totalBaht = 0;

    let html = `<div class="card">
        <div class="card-header">
            <h3>น้ำมันใช้ภายในสถานี</h3>
        </div>
        <div style="font-size:12px;color:var(--gray-500);padding:0 16px 8px">บันทึกการใช้น้ำมันภายในสถานี เช่น เติมรถขนส่ง, เครื่องจักร — ข้อมูลจะเชื่อมกับ "น้ำมันใช้เอง" ในภาษีส่วน ก</div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>ถังน้ำมัน</th>
                        <th class="number">ลิตร</th>
                        <th class="number">บาท</th>
                        <th>หมายเหตุ</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="internalUsageRows">`;

    formData.internalUsage.forEach((item, idx) => {
        const tank = stationTanks.find(t => t.key === item.tankKey);
        const ft = tank ? tank.fuelType : '';
        const price = ft ? parseNum(fuelPrices[ft]) : 0;
        const liters = parseNum(item.liters);
        const baht = liters * price;
        totalLiters += liters;
        totalBaht += baht;

        const tankOptions = stationTanks.map(t => {
            const tLabel = t.label + ' (' + (REF.fuelTypeLabels[t.fuelType] || t.fuelType) + ')';
            return `<option value="${t.key}" ${t.key === item.tankKey ? 'selected' : ''}>${tLabel}</option>`;
        }).join('');

        html += `<tr>
            <td>
                <select data-idx="${idx}" onchange="updateInternalUsageRow(this, 'tankKey')">
                    <option value="">-- เลือกถัง --</option>${tankOptions}
                </select>
            </td>
            <td class="number"><input type="number" step="0.01" value="${item.liters || ''}" data-idx="${idx}" onchange="updateInternalUsageRow(this, 'liters')" placeholder="ลิตร"></td>
            <td class="number">${liters > 0 && price > 0 ? fmt(baht) : '-'}</td>
            <td><input type="text" value="${item.note || ''}" data-idx="${idx}" onchange="updateInternalUsageRow(this, 'note')" placeholder="เช่น เติมรถกระบะ"></td>
            <td><button class="btn-delete-row" onclick="removeInternalUsageRow(${idx})">&#10005;</button></td>
        </tr>`;
    });

    if (formData.internalUsage.length === 0) {
        html += `<tr><td colspan="5" style="text-align:center;color:var(--gray-400);padding:16px;">ยังไม่มีรายการ</td></tr>`;
    }

    html += `</tbody>
            <tfoot>
                <tr class="table-row-summary">
                    <td>รวมใช้ภายใน</td>
                    <td class="number">${totalLiters > 0 ? fmtDec(totalLiters, 2) + ' ลิตร' : '-'}</td>
                    <td class="number">${totalBaht > 0 ? fmt(totalBaht) + ' บาท' : '-'}</td>
                    <td colspan="2"></td>
                </tr>
            </tfoot>
        </table></div>
        <div style="text-align:center;margin-top:8px">
            <button class="btn btn-outline btn-sm" onclick="addInternalUsageRow()">+ เพิ่มรายการ</button>
        </div></div>`;

    el.innerHTML = html;
}

function addInternalUsageRow() {
    if (!formData.internalUsage) formData.internalUsage = [];
    formData.internalUsage.push({ tankKey: '', liters: '', note: '' });
    renderInternalUsageTab();
}

function removeInternalUsageRow(idx) {
    formData.internalUsage.splice(idx, 1);
    renderInternalUsageTab();
}

function updateInternalUsageRow(input, field) {
    const idx = parseInt(input.dataset.idx);
    formData.internalUsage[idx][field] = input.value;
    renderInternalUsageTab();
}

// ===== CREDIT CUSTOMERS TAB =====
function renderCreditTab() {
    const el = document.getElementById('subtab-credit');
    if (!el) return;
    const fuelTypes = Object.entries(REF.fuelTypeLabels);
    const masterList = (typeof CREDIT_CUSTOMERS_MASTER !== 'undefined') ? CREDIT_CUSTOMERS_MASTER : [];

    // Blocked customer warnings (show at top)
    const warnings = [];
    formData.creditCustomers.forEach(c => {
        const w = getCreditWarningForCustomer((c.name || '').trim());
        if (w) warnings.push({ name: c.name, ...w });
    });
    let warningHtml = '';
    if (warnings.length > 0) {
        warningHtml = '<div style="margin-bottom:12px">' + warnings.map(w =>
            '<div class="card" style="padding:10px 14px;margin-bottom:6px;border-left:4px solid ' + (w.type === 'danger' ? '#ef4444' : '#f59e0b') + ';background:' + (w.type === 'danger' ? '#fef2f2' : '#fffbeb') + '">'
            + '<strong>' + w.name + '</strong>: ' + w.msg
            + '</div>'
        ).join('') + '</div>';
    }

    let html = warningHtml + `<div class="card">
        <div class="card-header">
            <h3>ลูกหนี้เงินเชื่อ</h3>
            <button class="btn btn-sm btn-primary" onclick="printCreditCustomers()">🖨️ พิมพ์รายการลูกหนี้</button>
        </div>
        <datalist id="creditCusList">
            ${masterList.map(c => `<option value="${c.name}" label="${c.code} - ${c.name}">`).join('')}
        </datalist>
        <datalist id="creditCusCodeList">
            ${masterList.map(c => `<option value="${c.code}" label="${c.code} - ${c.name}">`).join('')}
        </datalist>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>รหัส</th>
                        <th>ชื่อลูกหนี้</th>
                        <th>เลขที่อ้างอิง</th>
                        <th>ทะเบียนรถ</th>
                        <th>ชนิดน้ำมัน</th>
                        <th class="number">ลิตร</th>
                        <th class="number">จำนวนเงิน (บาท)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="creditRows">`;

    formData.creditCustomers.forEach((item, idx) => {
        html += `<tr>
            <td><input type="text" value="${item.cusCode || ''}" data-idx="${idx}" class="credit-cus-code" list="creditCusCodeList" onchange="updateCreditRow(this, 'cusCode')" oninput="matchCreditByCode(this)" placeholder="รหัส" autocomplete="off" style="width:80px;text-align:center"></td>
            <td><input type="text" value="${item.name || ''}" data-idx="${idx}" class="credit-cus-name" list="creditCusList" onchange="updateCreditRow(this, 'name')" oninput="matchCreditCustomer(this)" placeholder="พิมพ์ชื่อเพื่อค้นหา" autocomplete="off"></td>
            <td><input type="text" value="${item.refNo || ''}" data-idx="${idx}" onchange="updateCreditRow(this, 'refNo')" placeholder="เลขที่ใบสั่ง"></td>
            <td><input type="text" value="${item.licensePlate || ''}" data-idx="${idx}" onchange="updateCreditRow(this, 'licensePlate')" placeholder="ทะเบียนรถ"></td>
            <td>
                <select data-idx="${idx}" onchange="updateCreditRow(this, 'fuelType')">
                    <option value="">-- เลือก --</option>
                    ${fuelTypes.map(([key, label]) => `<option value="${key}" ${key === item.fuelType ? 'selected' : ''}>${label}</option>`).join('')}
                </select>
            </td>
            <td class="number"><input type="number" step="0.01" value="${item.liters || ''}" data-idx="${idx}" onchange="updateCreditRow(this, 'liters')"></td>
            <td class="number"><input type="number" step="0.01" value="${item.amount || ''}" data-idx="${idx}" onchange="updateCreditRow(this, 'amount')"></td>
            <td><button class="btn-delete-row" onclick="removeCreditRow(${idx})">&#10005;</button></td>
        </tr>`;
    });

    const totalCredit = formData.creditCustomers.reduce((sum, c) => sum + parseNum(c.amount), 0);
    const totalLiters = formData.creditCustomers.reduce((sum, c) => sum + parseNum(c.liters), 0);

    html += `</tbody>
            <tfoot>
                <tr class="table-row-summary">
                    <td colspan="2">รวมเงินเชื่อ</td>
                    <td colspan="3"></td>
                    <td class="number">${fmt(totalLiters)}</td>
                    <td class="number">${fmt(totalCredit)}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table></div>
        <div style="text-align:center;margin-top:8px">
            <button class="btn btn-outline btn-sm" onclick="addCreditRow()">+ เพิ่มรายการ</button>
        </div></div>`;

    el.innerHTML = html;
}

function addCreditRow() {
    formData.creditCustomers.push({ name: '', cusCode: '', refNo: '', amount: 0, fuelType: '', liters: 0, licensePlate: '' });
    renderCreditTab();
}

function removeCreditRow(idx) {
    formData.creditCustomers.splice(idx, 1);
    renderCreditTab();
}

function matchCreditCustomer(input) {
    const idx = parseInt(input.dataset.idx);
    const val = input.value.trim();
    const masterList = (typeof CREDIT_CUSTOMERS_MASTER !== 'undefined') ? CREDIT_CUSTOMERS_MASTER : [];
    const match = masterList.find(c => c.name === val);
    const row = input.closest('tr');
    const codeInput = row ? row.querySelector('.credit-cus-code') : null;
    if (match) {
        formData.creditCustomers[idx].cusCode = match.code;
        formData.creditCustomers[idx].name = match.name;
        if (codeInput) codeInput.value = match.code;
    } else {
        formData.creditCustomers[idx].cusCode = '';
        if (codeInput) codeInput.value = '';
    }
}

function matchCreditByCode(input) {
    const idx = parseInt(input.dataset.idx);
    const val = input.value.trim();
    const masterList = (typeof CREDIT_CUSTOMERS_MASTER !== 'undefined') ? CREDIT_CUSTOMERS_MASTER : [];
    const match = masterList.find(c => c.code === val);
    const row = input.closest('tr');
    const nameInput = row ? row.querySelector('.credit-cus-name') : null;
    if (match) {
        formData.creditCustomers[idx].cusCode = match.code;
        formData.creditCustomers[idx].name = match.name;
        if (nameInput) nameInput.value = match.name;
    } else {
        formData.creditCustomers[idx].name = '';
        if (nameInput) nameInput.value = '';
    }
}

function updateCreditRow(input, field) {
    const idx = parseInt(input.dataset.idx);
    // Store numeric fields as numbers, not strings
    if (field === 'liters' || field === 'amount') {
        formData.creditCustomers[idx][field] = parseNum(input.value);
    } else {
        formData.creditCustomers[idx][field] = input.value;
    }

    if (field === 'name') {
        matchCreditCustomer(input);
    }
    if (field === 'cusCode') {
        matchCreditByCode(input);
    }

    const item = formData.creditCustomers[idx];
    const fuelPrices = hasFuelPrices(formData.fuelPrices) ? formData.fuelPrices : DB.getFuelPrices();
    const price = parseNum(fuelPrices[item.fuelType]);
    const row = input.closest('tr');

    // Auto-calculate amount from liters when liters or fuelType changes
    if (field === 'liters' || field === 'fuelType') {
        if (price > 0 && parseNum(item.liters) > 0) {
            const calcAmount = Math.round(parseNum(item.liters) * price * 100) / 100;
            item.amount = calcAmount;
            if (row) {
                const amtInput = row.querySelector('input[onchange*="\'amount\'"]');
                if (amtInput) amtInput.value = calcAmount;
            }
        }
    }

    // Reverse-calculate liters from amount when amount changes
    if (field === 'amount') {
        if (price > 0 && parseNum(item.amount) > 0) {
            const calcLiters = Math.round(parseNum(item.amount) / price * 100) / 100;
            item.liters = calcLiters;
            if (row) {
                const litInput = row.querySelector('input[onchange*="\'liters\'"]');
                if (litInput) litInput.value = calcLiters;
            }
        }
    }

    if (field === 'amount' || field === 'liters' || field === 'fuelType') {
        // Update totals in footer
        const totalCredit = formData.creditCustomers.reduce((sum, c) => sum + parseNum(c.amount), 0);
        const totalLiters = formData.creditCustomers.reduce((sum, c) => sum + parseNum(c.liters), 0);
        const footCells = input.closest('table').querySelectorAll('tfoot td.number');
        if (footCells[0]) footCells[0].textContent = fmt(totalLiters);
        if (footCells[1]) footCells[1].textContent = fmt(totalCredit);
    }
}

// ===== TAX INVOICE TAB =====
function renderTaxInvoiceTab() {
    const el = document.getElementById('subtab-taxinvoice');
    if (!el) return;
    const inv = formData.taxInvoices || { abbreviated: [], full: [] };

    function renderInvoiceSection(type, title, subtitle, items) {
        let html = `<div class="card" style="margin-bottom:16px">
            <div class="card-header">
                <div><h3>${title}</h3><small style="color:var(--gray-400)">${subtitle}</small></div>
            </div>
            <div class="table-wrapper"><table>
                <thead><tr>
                    <th>เล่มที่</th><th>เลขที่</th><th class="number">จำนวน (ฉบับ)</th>
                    <th class="number">จำนวนเงิน (บาท)</th><th class="number">VAT (บาท)</th><th></th>
                </tr></thead><tbody>`;

        if (items.length === 0) {
            html += `<tr><td colspan="6" style="text-align:center;color:var(--gray-400);padding:16px">ยังไม่มีรายการ</td></tr>`;
        }
        let totalAmt = 0, totalVat = 0;
        items.forEach((item, idx) => {
            const amt = parseNum(item.amount);
            const vat = amt > 0 ? Math.round((amt / 1.07 * 0.07) * 100) / 100 : 0;
            totalAmt += amt;
            totalVat += vat;
            html += `<tr>
                <td><input type="text" value="${item.bookNo || ''}" style="width:70px" data-type="${type}" data-idx="${idx}" data-field="bookNo" onchange="updateTaxInvoice(this)"></td>
                <td><input type="text" value="${item.invoiceNo || ''}" style="width:80px" data-type="${type}" data-idx="${idx}" data-field="invoiceNo" onchange="updateTaxInvoice(this)"></td>
                <td class="number"><input type="number" min="0" value="${item.copies || 1}" style="width:60px" data-type="${type}" data-idx="${idx}" data-field="copies" onchange="updateTaxInvoice(this)"></td>
                <td class="number"><input type="number" min="0" step="0.01" value="${item.amount || ''}" style="width:110px" data-type="${type}" data-idx="${idx}" data-field="amount" onchange="updateTaxInvoice(this)"></td>
                <td class="number">${fmt(vat)}</td>
                <td><button class="btn-delete-row" onclick="removeTaxInvoiceRow('${type}',${idx})">&#10005;</button></td>
            </tr>`;
        });
        html += `</tbody>`;
        if (items.length > 0) {
            html += `<tfoot><tr class="table-row-summary">
                <td colspan="3">รวม</td><td class="number">${fmt(totalAmt)}</td>
                <td class="number">${fmt(totalVat)}</td><td></td>
            </tr></tfoot>`;
        }
        html += `</table></div>
        <div style="text-align:center;margin-top:8px">
            <button class="btn btn-outline btn-sm" onclick="addTaxInvoiceRow('${type}')">+ เพิ่มรายการ</button>
        </div></div>`;
        return html;
    }

    el.innerHTML =
        renderInvoiceSection('abbreviated', 'ใบกำกับภาษีอย่างย่อ', 'ตามมาตรา 86/6 แห่งประมวลรัษฎากร (จากการขายน้ำมันผ่านมิเตอร์หัวจ่าย)', inv.abbreviated) +
        renderInvoiceSection('full', 'ใบกำกับภาษีเต็มรูปแบบ', 'ตามมาตรา 86/4 แห่งประมวลรัษฎากร', inv.full);
}

function addTaxInvoiceRow(type) {
    if (!formData.taxInvoices) formData.taxInvoices = { abbreviated: [], full: [] };
    formData.taxInvoices[type].push({ bookNo: '', invoiceNo: '', copies: 1, amount: 0 });
    renderTaxInvoiceTab();
}

function removeTaxInvoiceRow(type, idx) {
    formData.taxInvoices[type].splice(idx, 1);
    renderTaxInvoiceTab();
}

function updateTaxInvoice(input) {
    const { type, idx, field } = input.dataset;
    formData.taxInvoices[type][parseInt(idx)][field] = field === 'copies' || field === 'amount' ? parseNum(input.value) : input.value;
    renderTaxInvoiceTab();
}

function printCreditCustomers() {
    var stationId = document.getElementById('entryStation').value;
    var dateStr = document.getElementById('entryDate').value;
    if (!stationId || !dateStr) return;

    var station = REF.stations.find(function(s) { return s.id === stationId; });
    var customers = formData.creditCustomers || [];
    if (customers.length === 0) { showToast('ไม่มีรายการลูกหนี้เงินเชื่อ', 'error'); return; }

    var fuelPrices = hasFuelPrices(formData.fuelPrices) ? formData.fuelPrices : DB.getFuelPrices();

    // Build rows
    var totalLiters = 0, totalAmount = 0;
    var rows = '';
    customers.forEach(function(c, i) {
        var amt = parseNum(c.amount);
        var lit = parseNum(c.liters);
        totalLiters += lit;
        totalAmount += amt;
        rows += '<tr>'
            + '<td style="text-align:center">' + (i + 1) + '</td>'
            + '<td style="text-align:center">' + (c.cusCode || '-') + '</td>'
            + '<td>' + (c.name || '-') + '</td>'
            + '<td>' + (c.refNo || '-') + '</td>'
            + '<td>' + (c.licensePlate || '-') + '</td>'
            + '<td>' + (REF.fuelTypeLabels[c.fuelType] || c.fuelType || '-') + '</td>'
            + '<td style="text-align:right">' + (fuelPrices[c.fuelType] ? fmt(fuelPrices[c.fuelType]) : '-') + '</td>'
            + '<td style="text-align:right">' + fmt(lit) + '</td>'
            + '<td style="text-align:right;font-weight:bold">' + fmt(amt) + '</td>'
            + '</tr>';
    });

    // Summary by fuel type
    var byFuel = {};
    customers.forEach(function(c) {
        var ft = c.fuelType || 'other';
        if (!byFuel[ft]) byFuel[ft] = { liters: 0, amount: 0, count: 0 };
        byFuel[ft].liters += parseNum(c.liters);
        byFuel[ft].amount += parseNum(c.amount);
        byFuel[ft].count++;
    });
    var fuelSummaryRows = '';
    Object.keys(byFuel).forEach(function(ft) {
        var d = byFuel[ft];
        fuelSummaryRows += '<tr>'
            + '<td>' + (REF.fuelTypeLabels[ft] || ft) + '</td>'
            + '<td style="text-align:right">' + d.count + '</td>'
            + '<td style="text-align:right">' + fmt(d.liters) + '</td>'
            + '<td style="text-align:right;font-weight:bold">' + fmt(d.amount) + '</td>'
            + '</tr>';
    });

    var printHtml = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>รายการลูกหนี้เงินเชื่อ</title>'
        + '<style>'
        + 'body{font-family:"Sarabun",sans-serif;font-size:11px;margin:0;padding:8px 15px;color:#333}'
        + '#content{transform-origin:top left}'
        + '.header{text-align:center;margin-bottom:8px;border-bottom:2px solid #333;padding-bottom:6px}'
        + '.header h2{margin:0;font-size:15px}'
        + '.header h3{margin:2px 0;font-size:11px;font-weight:normal;color:#666}'
        + '.header .date{font-size:13px;font-weight:bold;margin-top:4px}'
        + 'table{width:100%;border-collapse:collapse;margin-bottom:8px}'
        + 'th,td{padding:2px 6px;border:1px solid #ccc;font-size:10px}'
        + 'th{background:#f5f5f5;font-weight:bold;text-align:left}'
        + '.section-title{font-weight:bold;font-size:12px;margin:8px 0 4px;padding:2px 0;border-bottom:1px solid #999}'
        + '.total-row{font-weight:bold;background:#f0f0f0}'
        + '.big-total{font-size:13px;font-weight:bold;padding:4px;margin:4px 0;border:2px solid #333;text-align:center}'
        + '.signature{margin-top:20px;display:flex;justify-content:space-around}'
        + '.signature div{text-align:center;width:160px}'
        + '.signature .line{border-bottom:1px solid #333;height:30px}'
        + '@media print{body{padding:4px 10px}@page{size:A4;margin:5mm}}'
        + '</style>'
        + '<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;700&display=swap" rel="stylesheet">'
        + '</head><body><div id="content">'

        // Header
        + '<div class="header">'
        + '<h2>' + (station ? station.businessName : '') + '</h2>'
        + '<h3>' + (station ? station.address : '') + '</h3>'
        + '<div class="date">รายการลูกหนี้เงินเชื่อประจำวัน: ' + formatDateThai(dateStr) + '</div>'
        + '</div>'

        // Detail table
        + '<table>'
        + '<thead><tr><th style="text-align:center">ลำดับ</th><th style="text-align:center">รหัส</th><th>ชื่อลูกหนี้</th><th>เลขที่อ้างอิง</th><th>ทะเบียนรถ</th><th>ชนิดน้ำมัน</th><th style="text-align:right">ราคา/ลิตร</th><th style="text-align:right">ลิตร</th><th style="text-align:right">จำนวนเงิน</th></tr></thead>'
        + '<tbody>' + rows
        + '<tr class="total-row"><td colspan="7">รวมทั้งหมด (' + customers.length + ' รายการ)</td><td style="text-align:right">' + fmt(totalLiters) + '</td><td style="text-align:right">' + fmt(totalAmount) + '</td></tr>'
        + '</tbody></table>'

        // Summary by fuel type
        + '<div class="section-title">สรุปแยกตามชนิดน้ำมัน</div>'
        + '<table><thead><tr><th>ชนิดน้ำมัน</th><th style="text-align:right">จำนวนราย</th><th style="text-align:right">ลิตรรวม</th><th style="text-align:right">จำนวนเงินรวม</th></tr></thead>'
        + '<tbody>' + fuelSummaryRows
        + '<tr class="total-row"><td>รวม</td><td style="text-align:right">' + customers.length + '</td><td style="text-align:right">' + fmt(totalLiters) + '</td><td style="text-align:right">' + fmt(totalAmount) + '</td></tr>'
        + '</tbody></table>'

        + '<div class="big-total">ยอดเงินเชื่อรวม: ' + fmt(totalAmount) + ' บาท</div>'

        // Signature
        + '<div class="signature">'
        + '<div><div class="line"></div><div>ผู้จัดทำ</div></div>'
        + '<div><div class="line"></div><div>ผู้ตรวจสอบ</div></div>'
        + '<div><div class="line"></div><div>ผู้อนุมัติ</div></div>'
        + '</div>'
        + '</div>' // close #content
        + '<script>'
        + 'window.addEventListener("load",function(){'
        + 'var c=document.getElementById("content");'
        + 'var pageH=1045;'
        + 'var h=c.scrollHeight;'
        + 'if(h>pageH){'
        + 'var s=pageH/h;'
        + 'c.style.transform="scale("+s+")";'
        + 'c.style.transformOrigin="top left";'
        + 'c.style.width=(100/s)+"%";'
        + '}'
        + 'setTimeout(function(){window.print();},300);'
        + '});'
        + '<\/script>'
        + '</body></html>';

    var printWin = window.open('', '_blank');
    printWin.document.write(printHtml);
    printWin.document.close();
}

// ===== SUMMARY TAB =====
function renderSummaryTab() {
    const stationId = document.getElementById('entryStation').value;
    if (!stationId) return;

    const el = document.getElementById('subtab-summary');
    const fuelPrices = hasFuelPrices(formData.fuelPrices) ? formData.fuelPrices : DB.getFuelPrices();

    // Calculate fuel sales by type
    const tanks = REF.tanks.filter(t => t.stationId === stationId);
    const fuelSalesByType = {};

    tanks.forEach(tank => {
        const meters = REF.meters.filter(m => m.tankKey === tank.key);
        const liters = meters.reduce((sum, m) => {
            const r = formData.meterReadings[m.id] || {};
            return sum + Math.max(0, parseNum(r.end) - parseNum(r.start));
        }, 0);

        if (!fuelSalesByType[tank.fuelType]) {
            fuelSalesByType[tank.fuelType] = { liters: 0, pricePerLiter: parseNum(fuelPrices[tank.fuelType]) };
        }
        fuelSalesByType[tank.fuelType].liters += liters;
    });

    let fuelSalesValue = 0;
    Object.keys(fuelSalesByType).forEach(ft => {
        fuelSalesByType[ft].total = fuelSalesByType[ft].liters * fuelSalesByType[ft].pricePerLiter;
        fuelSalesValue += fuelSalesByType[ft].total;
    });

    // Product sales
    const lubricantSales = formData.productSales.reduce((sum, item) => {
        const p = REF.products.find(pr => pr.id === item.productId);
        return sum + (parseNum(item.quantity) * (p ? p.price : 0));
    }, 0);

    // Expenses
    const siteExpenses = formData.expenses.reduce((sum, e) => sum + parseNum(e.amount), 0);

    // Internal usage (น้ำมันใช้ภายใน)
    const internalUsageTotal = (formData.internalUsage || []).reduce((sum, item) => {
        const tank = tanks.find(t => t.key === item.tankKey);
        const ft = tank ? tank.fuelType : '';
        const price = ft ? parseNum(fuelPrices[ft]) : 0;
        return sum + (parseNum(item.liters) * price);
    }, 0);

    // Finance values
    const fin = formData.finance;
    const otherIncome = parseNum(fin.otherIncome);
    const totalGross = fuelSalesValue + lubricantSales + otherIncome;
    // Auto-calculate creditSales from creditCustomers entries
    const creditSales = formData.creditCustomers.reduce((s, c) => s + parseNum(c.amount), 0);
    // Auto-calculate creditCard and bluecard from entries arrays
    const creditCard = (formData.creditCardEntries || []).reduce((s, e) => s + parseNum(e.amount), 0) || parseNum(fin.creditCardAmt);
    const bluecard = (formData.bluecardEntries || []).reduce((s, e) => s + parseNum(e.amount), 0) || parseNum(fin.bluecardAmt);
    const qrTransfer = parseNum(fin.qrTransferAmt);
    // Trade discount (for internal accounting only)
    const tradeDiscount = parseNum(fin.tradeDiscount) || parseNum(fin.discounts); // backward compat
    const totalDeductions = creditSales + creditCard + bluecard + qrTransfer + tradeDiscount + siteExpenses + internalUsageTotal;
    const expectedCash = totalGross - totalDeductions;
    const cashDay = parseNum(fin.cashDay);
    const cashNight = parseNum(fin.cashNight);
    const actualCash = cashDay + cashNight;
    const cashVariance = actualCash - expectedCash;

    const pricesInfo = DB.getFuelPricesInfo();
    const priceUpdatedAt = 'เฉพาะรายการนี้';
    const hasPrices = Object.values(fuelPrices).some(v => parseNum(v) > 0);

    let html = `
    <div class="finance-grid">
        <div class="finance-panel">
            <div class="price-header-flex">
                <div>
                    <h4>ราคาน้ำมัน (บาท/ลิตร)</h4>
                    <div class="fuel-price-updated">ราคาสำหรับรายการนี้ (แก้ไขได้ไม่กระทบรายการอื่น)</div>
                </div>
                <button class="btn btn-sm ${fuelPricesUnlocked ? 'btn-danger' : 'btn-outline'}" onclick="toggleFuelPriceLock()">
                    ${fuelPricesUnlocked
                        ? '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg> ล็อกราคา'
                        : '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> แก้ไขราคา'}
                </button>
            </div>
            ${!hasPrices ? '<div class="price-warning">กรุณาตั้งราคาน้ำมันก่อนใช้งาน (กดปุ่ม "แก้ไขราคา")</div>' : ''}
            ${Object.keys(fuelSalesByType).map(ft => {
                const label = REF.fuelTypeLabels[ft] || ft;
                if (fuelPricesUnlocked) {
                    return `<div class="price-input-row">
                        <label>${label}</label>
                        <input type="number" step="0.01" value="${fuelPrices[ft] || ''}"
                            data-fuel="${ft}" onchange="updateFuelPrice(this)">
                    </div>`;
                } else {
                    return `<div class="price-input-row">
                        <label>${label}</label>
                        <span class="summary-value">${fuelPrices[ft] ? fmt(fuelPrices[ft]) : '-'}</span>
                    </div>`;
                }
            }).join('')}
        </div>

        <div class="finance-panel">
            <h4>รายได้จากน้ำมัน (คำนวณอัตโนมัติ)</h4>
            ${Object.keys(fuelSalesByType).map(ft => {
                const label = REF.fuelTypeLabels[ft] || ft;
                const data = fuelSalesByType[ft];
                return `<div class="summary-row">
                    <span class="summary-label">${label} (${fmt(data.liters)} ลิตร x ${fmt(data.pricePerLiter)})</span>
                    <span class="summary-value" id="fuel-val-${ft.replace(/\s/g,'')}">${fmt(data.total)}</span>
                </div>`;
            }).join('')}
            <div class="summary-row total">
                <span>รวมรายได้น้ำมัน</span>
                <span id="totalFuelSales">${fmt(fuelSalesValue)}</span>
            </div>
        </div>
    </div>

    <div class="card" style="margin-top:16px;">
        <div class="card-header"><h3>สรุปบัญชีประจำวัน</h3>
            <div style="display:flex;gap:8px">
                <button class="btn btn-sm btn-primary" onclick="printDailySummary()">🖨️ พิมพ์ใบสรุป</button>
                <button class="btn btn-sm btn-outline" onclick="printCreditCustomers()">🖨️ พิมพ์ใบสรุปลูกหนี้</button>
            </div>
        </div>
        <div class="finance-grid">
            <div class="summary-box">
                <h4>รายได้</h4>
                <div class="summary-row">
                    <span class="summary-label">รายได้จากน้ำมัน</span>
                    <span class="summary-value">${fmt(fuelSalesValue)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">รายได้จากน้ำมันหล่อลื่น/สินค้า</span>
                    <span class="summary-value">${fmt(lubricantSales)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">รายได้อื่นๆ</span>
                    <span><input type="number" step="0.01" class="compact-input" value="${fin.otherIncome || ''}" onchange="formData.finance.otherIncome=this.value;renderSummaryTab()"></span>
                </div>
                <div class="summary-row total highlight">
                    <span>รวมรายได้ทั้งหมด</span>
                    <span>${fmt(totalGross)}</span>
                </div>
            </div>

            <div class="summary-box">
                <h4>รายการหัก</h4>
                <div class="summary-row">
                    <span class="summary-label">เงินเชื่อ ${formData.creditCustomers.length > 0 ? '<small style="color:var(--gray-400)">(' + formData.creditCustomers.length + ' รายการ)</small>' : ''}</span>
                    <span class="summary-value">${fmt(creditSales)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">เครดิตการ์ด ${(formData.creditCardEntries || []).length > 0 ? '<small style="color:var(--gray-400)">(' + formData.creditCardEntries.length + ' รายการ)</small>' : ''}</span>
                    <span class="summary-value">${fmt(creditCard)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Bluecard ${(formData.bluecardEntries || []).length > 0 ? '<small style="color:var(--gray-400)">(' + formData.bluecardEntries.length + ' รายการ)</small>' : ''}</span>
                    <span class="summary-value">${fmt(bluecard)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">เงินโอน / QR</span>
                    <span><input type="number" step="0.01" class="compact-input" value="${fin.qrTransferAmt || ''}" onchange="formData.finance.qrTransferAmt=this.value;renderSummaryTab()"></span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">ส่วนลดทางการค้า</span>
                    <span><input type="number" step="0.01" class="compact-input" value="${fin.tradeDiscount || ''}" onchange="formData.finance.tradeDiscount=this.value;renderSummaryTab()"></span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">ค่าใช้จ่าย (จากแท็บค่าใช้จ่าย)</span>
                    <span class="summary-value">${fmt(siteExpenses)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">ใช้ภายในสถานี ${(formData.internalUsage || []).length > 0 ? '<small style="color:var(--gray-400)">(' + formData.internalUsage.length + ' รายการ)</small>' : ''}</span>
                    <span class="summary-value">${fmt(internalUsageTotal)}</span>
                </div>
                <div class="summary-row total danger">
                    <span>รวมรายการหัก</span>
                    <span>${fmt(totalDeductions)}</span>
                </div>
            </div>
        </div>

        <div class="summary-box" style="margin-top:16px;">
            <div class="summary-row total highlight" style="font-size:18px;">
                <span>ยอดเงินที่ต้องส่ง (Expected)</span>
                <span>${fmt(expectedCash)}</span>
            </div>

            <div class="actual-cash-section">
                <h4>ยอดเงินส่งจริง</h4>
                <div class="cash-shift-grid">
                    <div class="cash-shift-box">
                        <div class="cash-shift-label">กะกลางวัน</div>
                        <input type="number" step="0.01" class="cash-shift-input" value="${fin.cashDay || ''}"
                            onchange="formData.finance.cashDay=this.value;renderSummaryTab()" placeholder="0.00">
                        <div class="slip-container">
                            ${fin.slipDay
                                ? '<div class="slip-wrapper"><img src="' + fin.slipDay + '" class="slip-thumbnail" onclick="previewSlip(this.src)"><button class="btn-delete-row slip-delete-btn" onclick="removeSlip(\'Day\')">&#10005;</button></div>'
                                : '<label class="btn btn-sm btn-outline" style="cursor:pointer"><input type="file" accept="image/*" style="display:none" onchange="attachSlip(this,\'Day\')">แนบสลิป</label>'
                            }
                        </div>
                    </div>
                    <div class="cash-shift-box">
                        <div class="cash-shift-label">กะกลางคืน</div>
                        <input type="number" step="0.01" class="cash-shift-input" value="${fin.cashNight || ''}"
                            onchange="formData.finance.cashNight=this.value;renderSummaryTab()" placeholder="0.00">
                        <div class="slip-container">
                            ${fin.slipNight
                                ? '<div class="slip-wrapper"><img src="' + fin.slipNight + '" class="slip-thumbnail" onclick="previewSlip(this.src)"><button class="btn-delete-row slip-delete-btn" onclick="removeSlip(\'Night\')">&#10005;</button></div>'
                                : '<label class="btn btn-sm btn-outline" style="cursor:pointer"><input type="file" accept="image/*" style="display:none" onchange="attachSlip(this,\'Night\')">แนบสลิป</label>'
                            }
                        </div>
                    </div>
                </div>
                <div class="summary-row total" style="margin-top:12px;">
                    <span>รวมเงินส่งจริง</span>
                    <span>${fmt(actualCash)}</span>
                </div>
            </div>

            <div class="summary-row total ${cashVariance >= 0 ? 'success' : 'danger'}" style="font-size:18px;margin-top:12px;">
                <span>ส่วนต่าง (${cashVariance >= 0 ? 'เกิน' : 'ขาด'})</span>
                <span>${fmt(Math.abs(cashVariance))}</span>
            </div>
            <div class="summary-row" style="margin-top:8px;">
                <span class="summary-label">หมายเหตุ</span>
                <span><input type="text" class="remark-input" value="${fin.remark || ''}" onchange="formData.finance.remark=this.value" placeholder="หมายเหตุเพิ่มเติม"></span>
            </div>
        </div>
    </div>`;

    el.innerHTML = html;
}

function printDailySummary() {
    const stationId = document.getElementById('entryStation').value;
    const dateStr = document.getElementById('entryDate').value;
    if (!stationId || !dateStr) return;

    const station = REF.stations.find(s => s.id === stationId);
    const fuelPrices = hasFuelPrices(formData.fuelPrices) ? formData.fuelPrices : DB.getFuelPrices();
    const tanks = REF.tanks.filter(t => t.stationId === stationId);

    // Fuel sales
    const fuelSalesByType = {};
    tanks.forEach(function(tank) {
        const meters = REF.meters.filter(m => m.tankKey === tank.key);
        const liters = meters.reduce(function(sum, m) {
            const r = formData.meterReadings[m.id] || {};
            return sum + Math.max(0, parseNum(r.end) - parseNum(r.start));
        }, 0);
        if (!fuelSalesByType[tank.fuelType]) fuelSalesByType[tank.fuelType] = { liters: 0, price: parseNum(fuelPrices[tank.fuelType]) };
        fuelSalesByType[tank.fuelType].liters += liters;
    });
    var fuelSalesValue = 0;
    Object.keys(fuelSalesByType).forEach(function(ft) {
        fuelSalesByType[ft].total = fuelSalesByType[ft].liters * fuelSalesByType[ft].price;
        fuelSalesValue += fuelSalesByType[ft].total;
    });

    var lubricantSales = 0;
    var productRows = '';
    (formData.productSales || []).forEach(function(item) {
        var p = REF.products.find(function(pr) { return pr.id === item.productId; });
        var qty = parseNum(item.quantity);
        if (!p || qty <= 0) return;
        var amt = qty * p.price;
        lubricantSales += amt;
        productRows += '<tr><td>' + p.name + '</td><td style="text-align:right">' + fmt(p.price) + '</td><td style="text-align:right">' + qty + '</td><td style="text-align:right">' + fmt(amt) + '</td></tr>';
    });
    var siteExpenses = (formData.expenses || []).reduce(function(sum, e) { return sum + parseNum(e.amount); }, 0);
    var internalUsageTotal = (formData.internalUsage || []).reduce(function(sum, item) {
        var tank = tanks.find(function(t) { return t.key === item.tankKey; });
        var ft = tank ? tank.fuelType : '';
        var price = ft ? parseNum(fuelPrices[ft]) : 0;
        return sum + (parseNum(item.liters) * price);
    }, 0);

    var fin = formData.finance || {};
    var otherIncome = parseNum(fin.otherIncome);
    var totalGross = fuelSalesValue + lubricantSales + otherIncome;
    var creditSales = (formData.creditCustomers || []).reduce(function(s, c) { return s + parseNum(c.amount); }, 0);
    var creditCard = (formData.creditCardEntries || []).reduce(function(s, e) { return s + parseNum(e.amount); }, 0) || parseNum(fin.creditCardAmt);
    var bluecard = (formData.bluecardEntries || []).reduce(function(s, e) { return s + parseNum(e.amount); }, 0) || parseNum(fin.bluecardAmt);
    var qrTransfer = parseNum(fin.qrTransferAmt);
    var tradeDiscount = parseNum(fin.tradeDiscount) || parseNum(fin.discounts);
    var totalDeductions = creditSales + creditCard + bluecard + qrTransfer + tradeDiscount + siteExpenses + internalUsageTotal;
    var expectedCash = totalGross - totalDeductions;
    var cashDay = parseNum(fin.cashDay);
    var cashNight = parseNum(fin.cashNight);
    var actualCash = cashDay + cashNight;
    var cashVariance = actualCash - expectedCash;

    // Fuel received
    var fuelReceivedRows = '';
    var totalReceived = 0;
    tanks.forEach(function(tank) {
        var se = (formData.stockEntries || {})[tank.key];
        if (se && parseNum(se.fuelAdded) > 0) {
            var added = parseNum(se.fuelAdded);
            totalReceived += added;
            fuelReceivedRows += '<tr><td>' + (REF.fuelTypeLabels[tank.fuelType] || tank.fuelType) + '</td><td style="text-align:right">' + fmt(added) + '</td></tr>';
        }
    });

    // Expenses detail
    var expenseRows = '';
    (formData.expenses || []).forEach(function(e) {
        if (parseNum(e.amount) > 0) {
            expenseRows += '<tr><td>' + (e.category || '-') + '</td><td>' + (e.note || '') + '</td><td style="text-align:right">' + fmt(e.amount) + '</td></tr>';
        }
    });

    // Credit card detail
    var ccRows = '';
    (formData.creditCardEntries || []).forEach(function(e, i) {
        if (parseNum(e.amount) > 0) {
            ccRows += '<tr><td>' + (i + 1) + '</td><td>' + (e.note || '-') + '</td><td style="text-align:right">' + fmt(e.amount) + '</td></tr>';
        }
    });

    // Bluecard detail
    var bcRows = '';
    (formData.bluecardEntries || []).forEach(function(e, i) {
        if (parseNum(e.amount) > 0) {
            bcRows += '<tr><td>' + (i + 1) + '</td><td>' + (e.note || '-') + '</td><td style="text-align:right">' + fmt(e.amount) + '</td></tr>';
        }
    });

    // Credit customers
    var creditRows = '';
    (formData.creditCustomers || []).forEach(function(c) {
        creditRows += '<tr><td>' + (c.name || '-') + '</td><td>' + (REF.fuelTypeLabels[c.fuelType] || '-') + '</td><td style="text-align:right">' + fmt(c.liters) + '</td><td style="text-align:right">' + fmt(c.amount) + '</td></tr>';
    });

    // Build fuel sales rows
    var fuelRows = '';
    Object.keys(fuelSalesByType).forEach(function(ft) {
        var d = fuelSalesByType[ft];
        fuelRows += '<tr><td>' + (REF.fuelTypeLabels[ft] || ft) + '</td><td style="text-align:right">' + fmt(d.liters) + '</td><td style="text-align:right">' + fmt(d.price) + '</td><td style="text-align:right">' + fmt(d.total) + '</td></tr>';
    });

    var varianceLabel = cashVariance >= 0 ? 'เกิน' : 'ขาด';
    var varianceColor = cashVariance >= 0 ? '#10b981' : '#ef4444';

    var printHtml = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>สรุปบัญชีประจำวัน</title>'
        + '<style>'
        + 'body{font-family:"Sarabun",sans-serif;font-size:11px;margin:0;padding:8px 15px;color:#333}'
        + '#content{transform-origin:top left}'
        + '.header{text-align:center;margin-bottom:8px;border-bottom:2px solid #333;padding-bottom:6px}'
        + '.header h2{margin:0;font-size:15px}'
        + '.header h3{margin:2px 0;font-size:11px;font-weight:normal;color:#666}'
        + '.header .date{font-size:13px;font-weight:bold;margin-top:4px}'
        + 'table{width:100%;border-collapse:collapse;margin-bottom:6px}'
        + 'th,td{padding:2px 6px;border:1px solid #ccc;font-size:10px}'
        + 'th{background:#f5f5f5;font-weight:bold;text-align:left}'
        + '.section-title{font-weight:bold;font-size:12px;margin:6px 0 3px;padding:2px 0;border-bottom:1px solid #999}'
        + '.total-row{font-weight:bold;background:#f0f0f0}'
        + '.big-total{font-size:13px;font-weight:bold;padding:4px;margin:4px 0;border:2px solid #333;text-align:center}'
        + '.variance{font-size:13px;font-weight:bold;padding:4px;margin:3px 0;text-align:center;border:2px solid ' + varianceColor + ';color:' + varianceColor + '}'
        + '.two-col{display:flex;gap:10px}'
        + '.two-col>div{flex:1}'
        + '.signature{margin-top:20px;display:flex;justify-content:space-around}'
        + '.signature div{text-align:center;width:160px}'
        + '.signature .line{border-bottom:1px solid #333;height:30px}'
        + '@media print{body{padding:4px 10px}@page{size:A4;margin:5mm}}'
        + '</style>'
        + '<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;700&display=swap" rel="stylesheet">'
        + '</head><body><div id="content">'

        // Header
        + '<div class="header">'
        + '<h2>' + (station ? station.businessName : '') + '</h2>'
        + '<h3>' + (station ? station.address : '') + '</h3>'
        + '<h3>เลขประจำตัวผู้เสียภาษี: ' + (station ? station.taxId : '') + '</h3>'
        + '<div class="date">ใบสรุปบัญชีประจำวัน: ' + formatDateThai(dateStr) + '</div>'
        + '</div>'

        // Fuel sales
        + '<div class="section-title">รายได้จากน้ำมัน</div>'
        + '<table><thead><tr><th>ชนิดน้ำมัน</th><th style="text-align:right">ลิตร</th><th style="text-align:right">ราคา/ลิตร</th><th style="text-align:right">จำนวนเงิน</th></tr></thead>'
        + '<tbody>' + fuelRows
        + '<tr class="total-row"><td>รวมรายได้น้ำมัน</td><td></td><td></td><td style="text-align:right">' + fmt(fuelSalesValue) + '</td></tr>'
        + '</tbody></table>'

        // Product sales
        + (productRows ? '<div class="section-title">รายได้จากสินค้า</div>'
        + '<table><thead><tr><th>สินค้า</th><th style="text-align:right">ราคา/หน่วย</th><th style="text-align:right">จำนวน</th><th style="text-align:right">จำนวนเงิน</th></tr></thead>'
        + '<tbody>' + productRows
        + '<tr class="total-row"><td>รวมรายได้สินค้า</td><td></td><td></td><td style="text-align:right">' + fmt(lubricantSales) + '</td></tr>'
        + '</tbody></table>' : '')

        // Two column: Income & Deductions
        + '<div class="two-col">'

        // Income
        + '<div>'
        + '<div class="section-title">รายได้</div>'
        + '<table>'
        + '<tr><td>รายได้จากน้ำมัน</td><td style="text-align:right">' + fmt(fuelSalesValue) + '</td></tr>'
        + '<tr><td>รายได้สินค้า/หล่อลื่น</td><td style="text-align:right">' + fmt(lubricantSales) + '</td></tr>'
        + '<tr><td>รายได้อื่นๆ</td><td style="text-align:right">' + fmt(otherIncome) + '</td></tr>'
        + '<tr class="total-row"><td>รวมรายได้ทั้งหมด</td><td style="text-align:right">' + fmt(totalGross) + '</td></tr>'
        + '</table>'
        + '</div>'

        // Deductions
        + '<div>'
        + '<div class="section-title">รายการหัก</div>'
        + '<table>'
        + '<tr><td>เงินเชื่อ (' + (formData.creditCustomers || []).length + ' ราย)</td><td style="text-align:right">' + fmt(creditSales) + '</td></tr>'
        + '<tr><td>เครดิตการ์ด</td><td style="text-align:right">' + fmt(creditCard) + '</td></tr>'
        + '<tr><td>Bluecard</td><td style="text-align:right">' + fmt(bluecard) + '</td></tr>'
        + '<tr><td>เงินโอน / QR</td><td style="text-align:right">' + fmt(qrTransfer) + '</td></tr>'
        + '<tr><td>ส่วนลดทางการค้า</td><td style="text-align:right">' + fmt(tradeDiscount) + '</td></tr>'
        + '<tr><td>ค่าใช้จ่าย</td><td style="text-align:right">' + fmt(siteExpenses) + '</td></tr>'
        + '<tr><td>ใช้ภายในสถานี</td><td style="text-align:right">' + fmt(internalUsageTotal) + '</td></tr>'
        + '<tr class="total-row"><td>รวมรายการหัก</td><td style="text-align:right">' + fmt(totalDeductions) + '</td></tr>'
        + '</table>'
        + '</div>'
        + '</div>'

        // Expected cash
        + '<div class="big-total">ยอดเงินที่ต้องส่ง: ' + fmt(expectedCash) + ' บาท</div>'

        // Actual cash
        + '<table>'
        + '<tr><td>เงินส่งกะกลางวัน</td><td style="text-align:right">' + fmt(cashDay) + '</td></tr>'
        + '<tr><td>เงินส่งกะกลางคืน</td><td style="text-align:right">' + fmt(cashNight) + '</td></tr>'
        + '<tr class="total-row"><td>รวมเงินส่งจริง</td><td style="text-align:right">' + fmt(actualCash) + '</td></tr>'
        + '</table>'

        // Variance
        + '<div class="variance">ส่วนต่าง (' + varianceLabel + '): ' + fmt(Math.abs(cashVariance)) + ' บาท</div>'
        + (fin.remark ? '<div style="margin-top:4px;padding:4px 8px;border:1px solid #ccc;border-radius:4px">หมายเหตุ: ' + fin.remark + '</div>' : '');

    if (expenseRows) {
        printHtml += '<div class="section-title">ค่าใช้จ่าย</div>'
            + '<table><thead><tr><th>ประเภท</th><th>หมายเหตุ</th><th style="text-align:right">จำนวนเงิน</th></tr></thead><tbody>' + expenseRows
            + '<tr class="total-row"><td colspan="2">รวม</td><td style="text-align:right">' + fmt(siteExpenses) + '</td></tr></tbody></table>';
    }

    // Signature
    printHtml += '<div class="signature">'
        + '<div><div class="line"></div><div>ผู้จัดทำ</div></div>'
        + '<div><div class="line"></div><div>ผู้ตรวจสอบ</div></div>'
        + '<div><div class="line"></div><div>ผู้อนุมัติ</div></div>'
        + '</div>'
        + '</div>' // close #content
        + '<script>'
        + 'window.addEventListener("load",function(){'
        + 'var c=document.getElementById("content");'
        + 'var pageH=1045;' // A4 height ~297mm - 10mm margins ≈ 277mm ≈ 1045px at 96dpi
        + 'var h=c.scrollHeight;'
        + 'if(h>pageH){'
        + 'var s=pageH/h;'
        + 'c.style.transform="scale("+s+")";'
        + 'c.style.transformOrigin="top left";'
        + 'c.style.width=(100/s)+"%";'
        + '}'
        + 'setTimeout(function(){window.print();},300);'
        + '});'
        + '<\/script>'
        + '</body></html>';

    var printWin = window.open('', '_blank');
    printWin.document.write(printHtml);
    printWin.document.close();
}

function updateFuelPrice(input) {
    const fuelType = input.dataset.fuel;
    if (!formData.fuelPrices) formData.fuelPrices = DB.getFuelPrices();
    formData.fuelPrices[fuelType] = input.value;

    // Lock new price as default for future records
    const globalPrices = DB.getFuelPrices();
    globalPrices[fuelType] = input.value;
    DB.saveFuelPrices(globalPrices);

    renderSummaryTab();
}

function toggleFuelPriceLock() {
    fuelPricesUnlocked = !fuelPricesUnlocked;
    renderSummaryTab();
}

// ===== SLIP PHOTO FUNCTIONS =====
function attachSlip(input, shift) {
    const file = input.files[0];
    if (!file) return;
    // Compress image before storing
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const maxW = 800, maxH = 800;
            let w = img.width, h = img.height;
            if (w > maxW || h > maxH) {
                const ratio = Math.min(maxW / w, maxH / h);
                w = Math.round(w * ratio);
                h = Math.round(h * ratio);
            }
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.6);
            formData.finance['slip' + shift] = dataUrl;
            renderSummaryTab();
            showToast('แนบสลิปเรียบร้อย');
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function removeSlip(shift) {
    formData.finance['slip' + shift] = null;
    renderSummaryTab();
}

function previewSlip(src) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.onclick = () => overlay.remove();
    overlay.innerHTML = '<div class="modal" style="max-width:90vw;padding:16px;" onclick="event.stopPropagation()"><img src="' + src + '" style="max-width:100%;border-radius:8px;"><div style="text-align:center;margin-top:12px;"><button class="btn btn-outline" onclick="this.closest(\'.modal-overlay\').remove()">ปิด</button></div></div>';
    document.body.appendChild(overlay);
}

// ===== CASCADE UPDATE: update next day's carry-forward when editing a past record =====
function cascadeUpdateNextDay(stationId, date, savedRecord) {
    // Find next day's record (search forward up to 30 days)
    const d = new Date(date);
    for (let i = 1; i <= 30; i++) {
        const next = new Date(d);
        next.setDate(next.getDate() + i);
        const nextStr = next.toISOString().split('T')[0];
        const nextRecord = DB.getDailyRecord(stationId, nextStr);
        if (nextRecord) {
            let updated = false;

            // Update meter start values: next.start = saved.end
            if (savedRecord.meterReadings && nextRecord.meterReadings) {
                Object.keys(savedRecord.meterReadings).forEach(meterId => {
                    const savedEnd = savedRecord.meterReadings[meterId].end;
                    if (savedEnd !== '' && savedEnd !== undefined && savedEnd !== null) {
                        if (nextRecord.meterReadings[meterId]) {
                            const oldStart = nextRecord.meterReadings[meterId].start;
                            if (String(oldStart) !== String(savedEnd)) {
                                nextRecord.meterReadings[meterId].start = savedEnd;
                                updated = true;
                            }
                        }
                    }
                });
            }

            // Update stock opening: recalculate from saved record
            if (savedRecord.stockEntries && nextRecord.stockEntries) {
                const isFirstOfMonth = next.getDate() === 1;
                Object.keys(savedRecord.stockEntries).forEach(tankKey => {
                    const s = savedRecord.stockEntries[tankKey];
                    if (!nextRecord.stockEntries[tankKey]) return;
                    let carryValue;
                    if (isFirstOfMonth) {
                        carryValue = parseNum(s.actualDip);
                    } else {
                        const openStock = parseNum(s.openingStock);
                        const fuelAdded = parseNum(s.fuelAdded);
                        const tankMeters = REF.meters.filter(m => m.tankKey === tankKey);
                        const totalSold = tankMeters.reduce((sum, m) => {
                            const mr = savedRecord.meterReadings ? savedRecord.meterReadings[m.id] : null;
                            if (!mr) return sum;
                            return sum + Math.max(0, parseNum(mr.end) - parseNum(mr.start));
                        }, 0);
                        carryValue = openStock + fuelAdded - totalSold;
                    }
                    carryValue = Math.round(carryValue * 100) / 100;
                    const oldOpening = parseNum(nextRecord.stockEntries[tankKey].openingStock);
                    if (Math.abs(oldOpening - carryValue) > 0.001) {
                        nextRecord.stockEntries[tankKey].openingStock = carryValue;
                        updated = true;
                    }
                });
            }

            if (updated) {
                nextRecord.updatedAt = new Date().toISOString();
                DB.saveDailyRecord(nextRecord);
                showToast('อัพเดทยอดยกไปวันที่ ' + formatDateThai(nextStr) + ' แล้ว', 'info');
            }
            break; // Only update the immediate next record
        }
    }
}

// ===== SAVE RECORD =====
function saveCurrentRecord() {
    const stationId = document.getElementById('entryStation').value;
    const date = document.getElementById('entryDate').value;
    const staffId = document.getElementById('entryStaff').value;

    if (!stationId || !date) {
        showToast('กรุณาเลือกสาขาและวันที่', 'error');
        return;
    }

    // Calculate finance totals
    const fuelPrices = hasFuelPrices(formData.fuelPrices) ? formData.fuelPrices : DB.getFuelPrices();
    const tanks = REF.tanks.filter(t => t.stationId === stationId);
    let fuelSalesValue = 0;

    tanks.forEach(tank => {
        const meters = REF.meters.filter(m => m.tankKey === tank.key);
        const liters = meters.reduce((sum, m) => {
            const r = formData.meterReadings[m.id] || {};
            return sum + Math.max(0, parseNum(r.end) - parseNum(r.start));
        }, 0);
        fuelSalesValue += liters * parseNum(fuelPrices[tank.fuelType]);
    });

    const lubricantSales = formData.productSales.reduce((sum, item) => {
        const p = REF.products.find(pr => pr.id === item.productId);
        return sum + (parseNum(item.quantity) * (p ? p.price : 0));
    }, 0);

    const siteExpenses = formData.expenses.reduce((sum, e) => sum + parseNum(e.amount), 0);

    // Internal usage
    const internalUsageTotal = (formData.internalUsage || []).reduce((sum, item) => {
        const tank = tanks.find(t => t.key === item.tankKey);
        const ft = tank ? tank.fuelType : '';
        const price = ft ? parseNum(fuelPrices[ft]) : 0;
        return sum + (parseNum(item.liters) * price);
    }, 0);

    // Auto-calculate creditSales from creditCustomers entries
    const creditSalesTotal = formData.creditCustomers.reduce((s, c) => s + parseNum(c.amount), 0);

    // Auto-calculate creditCard/bluecard from entries
    const creditCardTotal = (formData.creditCardEntries || []).reduce((s, e) => s + parseNum(e.amount), 0) || parseNum(formData.finance.creditCardAmt);
    const bluecardTotal = (formData.bluecardEntries || []).reduce((s, e) => s + parseNum(e.amount), 0) || parseNum(formData.finance.bluecardAmt);

    const fin = formData.finance;
    fin.creditCardAmt = creditCardTotal;
    fin.bluecardAmt = bluecardTotal;
    const otherIncome = parseNum(fin.otherIncome);
    const totalGross = fuelSalesValue + lubricantSales + otherIncome;
    // Trade discount (for internal accounting only)
    const tradeDiscountSave = parseNum(fin.tradeDiscount) || parseNum(fin.discounts);
    const totalDeductions = creditSalesTotal + creditCardTotal +
        bluecardTotal + parseNum(fin.qrTransferAmt) + tradeDiscountSave + siteExpenses + internalUsageTotal;
    const expectedCash = totalGross - totalDeductions;

    const record = {
        stationId,
        date,
        staffId,
        fuelPrices: formData.fuelPrices || {},
        internalUsage: formData.internalUsage || [],
        meterReadings: formData.meterReadings,
        stockEntries: formData.stockEntries,
        productSales: formData.productSales,
        productStockEntries: formData.productStockEntries,
        taxInvoices: formData.taxInvoices || { abbreviated: [], full: [] },
        expenses: formData.expenses,
        creditCardEntries: formData.creditCardEntries || [],
        bluecardEntries: formData.bluecardEntries || [],
        creditCustomers: formData.creditCustomers,
        finance: {
            ...formData.finance,
            creditSales: creditSalesTotal,
            fuelSalesValue,
            lubricantSales,
            siteExpenses,
            totalGrossIncome: totalGross,
            totalDeductions,
            expectedCash,
            cashDay: parseNum(fin.cashDay),
            cashNight: parseNum(fin.cashNight),
            actualCashSent: parseNum(fin.cashDay) + parseNum(fin.cashNight),
            cashVariance: (parseNum(fin.cashDay) + parseNum(fin.cashNight)) - expectedCash,
        },
        updatedAt: new Date().toISOString(),
    };

    DB.saveDailyRecord(record);

    // Cascade: update next day's carry-forward values
    cascadeUpdateNextDay(stationId, date, record);

    showToast('บันทึกข้อมูลสำเร็จ');
    editingRecord = null;

    // Auto-advance to next sub-tab
    const tabOrder = ['meters','stock','products','productstock','expenses','creditcard','bluecard','internalusage','credit','summary','taxinvoice'];
    const activeBtn = document.querySelector('.sub-tab.active');
    if (activeBtn) {
        const currentTab = activeBtn.dataset.subtab;
        const idx = tabOrder.indexOf(currentTab);
        if (idx >= 0 && idx < tabOrder.length - 1) {
            const nextTab = tabOrder[idx + 1];
            const nextBtn = document.querySelector(`.sub-tab[data-subtab="${nextTab}"]`);
            if (nextBtn) {
                switchSubTab(nextBtn);
                nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }
}

// ===== HISTORY PAGE =====

// Check if a record is complete enough to display in history
function hasFuelPrices(obj) {
    return obj && typeof obj === 'object' && Object.keys(obj).length > 0;
}

function isRecordComplete(record) {
    if (!record) return false;
    const f = record.finance || {};
    // Has fuel sales value or actual cash sent
    if (parseNum(f.fuelSalesValue) > 0 || parseNum(f.actualCashSent) > 0) return true;
    // Has at least one meter with an end reading
    if (record.meterReadings) {
        const hasEnd = Object.values(record.meterReadings).some(m =>
            m.end !== '' && m.end !== undefined && m.end !== null && parseNum(m.end) > 0
        );
        if (hasEnd) return true;
    }
    // Has product sales
    if (record.productSales && record.productSales.length > 0) return true;
    // Has expenses
    if (record.expenses && record.expenses.length > 0) return true;
    return false;
}

function renderHistory(el) {
    const records = DB.getAllRecords().filter(isRecordComplete);

    let html = `<div class="card">
        <div class="card-header">
            <h3>ประวัติรายการทั้งหมด (${records.length} รายการ)</h3>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>ค้นหาสาขา</label>
                <select id="historyFilter" onchange="filterHistory()">
                    <option value="">ทุกสาขา</option>
                    ${REF.stations.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
                </select>
            </div>
        </div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>วันที่</th>
                        <th>สาขา</th>
                        <th>ผู้บันทึก</th>
                        <th class="number">รายได้น้ำมัน</th>
                        <th class="number">รายได้สินค้า</th>
                        <th class="number">ยอดที่ต้องส่ง</th>
                        <th class="number">ยอดจริง</th>
                        <th class="number">ส่วนต่าง</th>
                        <th>จัดการ</th>
                    </tr>
                </thead>
                <tbody id="historyBody">
                    ${renderHistoryRows(records)}
                </tbody>
            </table>
        </div>
    </div>`;

    el.innerHTML = html;
}

function renderHistoryRows(records) {
    if (records.length === 0) {
        return '<tr><td colspan="9" class="empty-state">ไม่พบรายการ</td></tr>';
    }
    return records.map(r => {
        const f = r.finance || {};
        const staff = REF.staff.find(s => s.id === r.staffId);
        const variance = (f.actualCashSent || 0) - (f.expectedCash || 0);
        return `<tr>
            <td>${formatDateThai(r.date)}</td>
            <td>${getStationName(r.stationId)}</td>
            <td>${staff ? staff.name : '-'}</td>
            <td class="number">${fmt(f.fuelSalesValue)}</td>
            <td class="number">${fmt(f.lubricantSales)}</td>
            <td class="number">${fmt(f.expectedCash)}</td>
            <td class="number">${fmt(f.actualCashSent)}</td>
            <td class="number ${variance >= 0 ? 'variance-positive' : 'variance-negative'}">${fmt(variance)}</td>
            <td>
                ${Auth.isAdmin() ? `<button class="btn btn-sm btn-outline" onclick="loadRecord('${r.stationId}','${r.date}')">แก้ไข</button>
                <button class="btn btn-sm btn-danger" onclick="deleteRecord('${r.stationId}','${r.date}')">ลบ</button>` : '-'}
            </td>
        </tr>`;
    }).join('');
}

function filterHistory() {
    const filter = document.getElementById('historyFilter').value;
    const records = DB.getAllRecords().filter(r => isRecordComplete(r) && (!filter || r.stationId === filter));
    document.getElementById('historyBody').innerHTML = renderHistoryRows(records);
}

function deleteRecord(stationId, date) {
    if (!Auth.isAdmin()) { showToast('เฉพาะผู้ดูแลระบบเท่านั้นที่สามารถลบรายการได้', 'error'); return; }
    if (confirm(`ลบรายการ ${getStationName(stationId)} วันที่ ${formatDateThai(date)} ?`)) {
        DB.deleteRecord(stationId, date);
        showToast('ลบรายการสำเร็จ');
        renderHistory(document.getElementById('pageContent'));
    }
}

// ===== REFERENCE PAGE =====
function renderReference(el) {
    el.innerHTML = `
        <div class="sub-tabs">
            <button class="sub-tab active" data-reftab="ref-stations" onclick="switchRefTab(this)">สาขา</button>
            <button class="sub-tab" data-reftab="ref-tanks" onclick="switchRefTab(this)">ถังน้ำมัน</button>
            <button class="sub-tab" data-reftab="ref-meters" onclick="switchRefTab(this)">มิเตอร์</button>
            <button class="sub-tab" data-reftab="ref-products" onclick="switchRefTab(this)">สินค้า</button>
            <button class="sub-tab" data-reftab="ref-staff" onclick="switchRefTab(this)">พนักงาน</button>
            <button class="sub-tab" data-reftab="ref-prices" onclick="switchRefTab(this)">ราคาน้ำมัน</button>
        </div>

        <div id="ref-stations" class="sub-tab-content active">
            <div class="card">
                <table><thead><tr><th>รหัส</th><th>ชื่อสาขา</th><th>จำนวนถัง</th></tr></thead>
                <tbody>
                    ${REF.stations.map(s => {
                        const tankCount = REF.tanks.filter(t => t.stationId === s.id).length;
                        return `<tr><td>${s.id}</td><td>${s.name}</td><td>${tankCount}</td></tr>`;
                    }).join('')}
                </tbody></table>
            </div>
        </div>

        <div id="ref-tanks" class="sub-tab-content">
            <div class="card">
                <div class="form-group">
                    <select id="tankStationFilter" onchange="filterRefTanks()">
                        <option value="">ทุกสาขา</option>
                        ${REF.stations.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
                    </select>
                </div>
                <table><thead><tr><th>รหัสถัง</th><th>สาขา</th><th>ประเภท</th><th>ชื่อถัง</th><th class="number">ความจุ</th></tr></thead>
                <tbody id="refTanksBody">
                    ${REF.tanks.map(t => `<tr class="${getFuelClass(t.fuelType)}">
                        <td>${t.key}</td><td>${getStationName(t.stationId)}</td>
                        <td>${REF.fuelTypeLabels[t.fuelType] || t.fuelType}</td>
                        <td>${t.label}</td><td class="number">${fmtInt(t.capacity)}</td>
                    </tr>`).join('')}
                </tbody></table>
            </div>
        </div>

        <div id="ref-meters" class="sub-tab-content">
            <div class="card">
                <table><thead><tr><th>รหัส</th><th>ถัง</th><th>ชื่อมือจ่าย</th></tr></thead>
                <tbody>
                    ${REF.meters.map(m => `<tr><td>${m.id}</td><td>${m.tankKey}</td><td>${m.label}</td></tr>`).join('')}
                </tbody></table>
            </div>
        </div>

        <div id="ref-products" class="sub-tab-content">
            <div class="card">
                <table><thead><tr><th>รหัส</th><th>ชื่อสินค้า</th><th class="number">ราคา (บาท)</th></tr></thead>
                <tbody>
                    ${REF.products.map(p => `<tr><td>${p.id}</td><td>${p.name}</td><td class="number">${fmt(p.price)}</td></tr>`).join('')}
                </tbody></table>
            </div>
        </div>

        <div id="ref-staff" class="sub-tab-content">
            <div class="card">
                <table><thead><tr><th>รหัส</th><th>ชื่อพนักงาน</th></tr></thead>
                <tbody>
                    ${REF.staff.map(s => `<tr><td>${s.id}</td><td>${s.name}</td></tr>`).join('')}
                </tbody></table>
            </div>
        </div>

        <div id="ref-prices" class="sub-tab-content">
            <div class="card">
                <div class="card-header"><h3>ตั้งราคาน้ำมัน (บาท/ลิตร)</h3></div>
                ${renderFuelPriceForm()}
            </div>
        </div>
    `;
}

function renderFuelPriceForm() {
    const prices = DB.getFuelPrices();
    const info = DB.getFuelPricesInfo();
    const updatedAt = info.updatedAt ? formatDateThai(info.updatedAt.split('T')[0]) : 'ยังไม่ได้ตั้งค่า';
    const fuelTypes = [...new Set(REF.tanks.map(t => t.fuelType))];

    let html = `<div class="info-banner">
        ราคาตั้งต้น — ใช้เป็นค่าเริ่มต้นสำหรับรายการใหม่ (แต่ละรายการสามารถแก้ราคาเฉพาะได้ในแท็บสรุปบัญชี)<br>
        <strong>อัปเดตล่าสุด:</strong> ${updatedAt}
    </div>`;

    html += fuelTypes.map(ft => {
        const label = REF.fuelTypeLabels[ft] || ft;
        return `<div class="price-input-row">
            <label>${label}</label>
            <input type="number" step="0.01" value="${prices[ft] || ''}"
                data-fuel="${ft}" onchange="updateFuelPriceRef(this)">
            <span>บาท/ลิตร</span>
        </div>`;
    }).join('');

    return html;
}

function updateFuelPriceRef(input) {
    const fuelType = input.dataset.fuel;
    const prices = DB.getFuelPrices();
    prices[fuelType] = input.value;
    DB.saveFuelPrices(prices);
    showToast('บันทึกราคาน้ำมันเรียบร้อย');
}

function switchRefTab(btn) {
    document.querySelectorAll('.sub-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.sub-tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.reftab).classList.add('active');
}

function filterRefTanks() {
    const filter = document.getElementById('tankStationFilter').value;
    const filtered = filter ? REF.tanks.filter(t => t.stationId === filter) : REF.tanks;
    document.getElementById('refTanksBody').innerHTML = filtered.map(t =>
        `<tr class="${getFuelClass(t.fuelType)}">
            <td>${t.key}</td><td>${getStationName(t.stationId)}</td>
            <td>${REF.fuelTypeLabels[t.fuelType] || t.fuelType}</td>
            <td>${t.label}</td><td class="number">${fmtInt(t.capacity)}</td>
        </tr>`
    ).join('');
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', async () => {
    // Enter key → move DOWN in same column (vertical navigation)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) {
            e.preventDefault();
            const active = e.target;
            active.dispatchEvent(new Event('change'));
            active.dispatchEvent(new Event('blur'));

            const td = active.closest('td');
            const tr = active.closest('tr');
            const table = active.closest('table');
            if (td && tr && table) {
                const colIdx = Array.from(tr.cells).indexOf(td);
                const rows = Array.from(table.querySelectorAll('tbody tr, tfoot tr'))
                    .filter(r => r.offsetParent !== null && r.querySelector('input, select'));
                const rowIdx = rows.indexOf(tr);
                if (rowIdx >= 0 && rowIdx < rows.length - 1) {
                    const nextRow = rows[rowIdx + 1];
                    const nextCell = nextRow.cells[colIdx];
                    const nextInput = nextCell ? nextCell.querySelector('input, select') : null;
                    if (nextInput) {
                        nextInput.focus();
                        if (nextInput.type === 'number' || nextInput.type === 'text') nextInput.select();
                        return;
                    }
                }
                const container = active.closest('.sub-tab-content') || active.closest('.card');
                if (container) {
                    const tables = Array.from(container.querySelectorAll('table'));
                    const tblIdx = tables.indexOf(table);
                    if (tblIdx >= 0 && tblIdx < tables.length - 1) {
                        const nextTable = tables[tblIdx + 1];
                        const firstDataRow = Array.from(nextTable.querySelectorAll('tbody tr'))
                            .find(r => r.offsetParent !== null && r.querySelector('input, select'));
                        if (firstDataRow) {
                            const cell = firstDataRow.cells[colIdx];
                            const inp = cell ? cell.querySelector('input, select') : null;
                            if (inp) { inp.focus(); if (inp.type === 'number' || inp.type === 'text') inp.select(); return; }
                        }
                    }
                }
            }
            const fallbackContainer = active.closest('.sub-tab-content') || active.closest('.card') || document.body;
            const inputs = Array.from(fallbackContainer.querySelectorAll('input:not([type="hidden"]), select'))
                .filter(el => el.offsetParent !== null);
            const idx = inputs.indexOf(active);
            if (idx >= 0 && idx < inputs.length - 1) {
                inputs[idx + 1].focus();
                if (inputs[idx + 1].type === 'number' || inputs[idx + 1].type === 'text') inputs[idx + 1].select();
            }
        }
    });

    // Check existing session
    const hasSession = await Auth.checkSession();
    if (hasSession) {
        await DB.init();
        showApp();
    } else {
        showLoginPage();
    }
});

// ===== AUTH UI =====
function showLoginPage() {
    document.getElementById('sidebar').style.display = 'none';
    document.querySelector('.main-content').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
}

function showApp() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('sidebar').style.display = '';
    document.querySelector('.main-content').style.display = '';

    // Date display
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('th-TH', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    // User info
    const nameEl = document.getElementById('userDisplayName');
    const roleEl = document.getElementById('userRole');
    if (nameEl) nameEl.textContent = Auth.getDisplayName();
    if (roleEl) roleEl.textContent = Auth.isAdmin() ? 'ผู้ดูแล' : 'ผู้บันทึก';

    // Show/hide admin-only menu
    const umLink = document.querySelector('[data-page="user-management"]');
    if (umLink) umLink.closest('li').style.display = Auth.isAdmin() ? '' : 'none';

    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            editingRecord = null;
            navigateTo(link.dataset.page);
        };
    });

    // Sidebar toggle
    document.getElementById('sidebarOpen').onclick = () => document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebarClose').onclick = () => document.getElementById('sidebar').classList.remove('open');

    navigateTo('dashboard');
}

async function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errorEl = document.getElementById('loginError');
    const btn = document.getElementById('loginBtn');

    if (!email || !password) { errorEl.textContent = 'กรุณากรอก Email และ Password'; return; }

    errorEl.textContent = '';
    btn.disabled = true;
    btn.textContent = 'กำลังเข้าสู่ระบบ...';

    try {
        await Auth.signIn(email, password);
        await DB.init();
        showApp();
    } catch (e) {
        errorEl.textContent = 'เข้าสู่ระบบไม่สำเร็จ: ' + (e.message || 'ลองอีกครั้ง');
    } finally {
        btn.disabled = false;
        btn.textContent = 'เข้าสู่ระบบ';
    }
}

async function handleLogout() {
    await Auth.signOut();
    showLoginPage();
}

// ===== USER MANAGEMENT PAGE (Admin Only) =====
function renderUserManagement(el) {
    if (!Auth.isAdmin()) {
        el.innerHTML = '<div class="card" style="padding:40px;text-align:center"><h3>ไม่มีสิทธิ์เข้าถึง</h3><p>เฉพาะผู้ดูแลระบบเท่านั้น</p></div>';
        return;
    }
    el.innerHTML = '<div class="card" style="padding:40px;text-align:center"><p>กำลังโหลด...</p></div>';

    supabaseClient.from('user_profiles').select('*').order('created_at').then(({ data: users, error }) => {
        if (error) { el.innerHTML = '<div class="card"><p>โหลดข้อมูลล้มเหลว: ' + error.message + '</p></div>'; return; }

        let html = `<div class="card">
            <div class="card-header"><h3>รายชื่อผู้ใช้งาน</h3></div>
            <div style="overflow-x:auto">
            <table class="data-table"><thead><tr>
                <th>ชื่อ</th><th>Email</th><th>สิทธิ์</th><th>สถานะ</th>
            </tr></thead><tbody>`;

        (users || []).forEach(u => {
            const isSelf = Auth.currentUser && u.id === Auth.currentUser.id;
            html += `<tr>
                <td><input value="${u.display_name || ''}" style="border:1px solid var(--gray-200);border-radius:6px;padding:6px 10px;width:120px"
                    onchange="updateUserProfile('${u.id}','display_name',this.value)" ${isSelf ? '' : (Auth.isAdmin() ? '' : 'disabled')}></td>
                <td style="font-size:13px;color:var(--gray-500)">${u.email || u.id.slice(0,8) + '...'}</td>
                <td><select onchange="updateUserProfile('${u.id}','role',this.value)" ${isSelf ? 'disabled' : ''} style="padding:6px 10px;border-radius:6px;border:1px solid var(--gray-200)">
                    <option value="entry" ${u.role === 'entry' ? 'selected' : ''}>ผู้บันทึก</option>
                    <option value="admin" ${u.role === 'admin' ? 'selected' : ''}>ผู้ดูแล</option>
                </select></td>
                <td>${isSelf ? '<span style="color:var(--primary);font-weight:600">คุณ</span>' : ''}</td>
            </tr>`;
        });

        html += `</tbody></table></div></div>
        <div class="card" style="margin-top:16px">
            <div class="card-header"><h3>เพิ่มผู้ใช้ใหม่</h3></div>
            <div style="padding:0 20px 20px">
                <p style="color:var(--gray-500);font-size:13px;margin-bottom:8px">
                    สร้างผู้ใช้ใหม่ที่ Supabase Dashboard &rarr; Authentication &rarr; Users &rarr; Add user
                </p>
                <p style="color:var(--gray-500);font-size:13px">
                    เมื่อผู้ใช้ login ครั้งแรก ระบบจะสร้าง profile อัตโนมัติเป็น "ผู้บันทึก"
                </p>
            </div>
        </div>`;

        el.innerHTML = html;
    });
}

async function updateUserProfile(userId, field, value) {
    const { error } = await supabaseClient
        .from('user_profiles')
        .update({ [field]: value })
        .eq('id', userId);
    if (error) {
        showToast('อัปเดตไม่สำเร็จ: ' + error.message, 'error');
    } else {
        showToast('อัปเดตสำเร็จ', 'success');
    }
}

// ===== CREDIT SUMMARY PAGE =====
const now_cs = new Date();
let creditSummaryState = {
    mode: 'month',
    month: now_cs.getFullYear() + '-' + String(now_cs.getMonth() + 1).padStart(2, '0'),
    dateFrom: todayStr(),
    dateTo: todayStr(),
    stationId: '',  // '' = ทุกสาขา
    customerFilter: '',  // '' = ทุกราย, or name to filter
    fuelTypeFilter: '',  // '' = ทุกชนิด
    billHeaderStationId: '',  // '' = ไม่แสดงหัวบิล, or station id for bill header
};

// Scan all records to build unique customer name list for autocomplete
function onCreditSummaryCustomerFilter(val) {
    const masterList = (typeof CREDIT_CUSTOMERS_MASTER !== 'undefined') ? CREDIT_CUSTOMERS_MASTER : [];
    // If user typed a code, convert to customer name
    const matchByCode = masterList.find(c => c.code === val.trim());
    if (matchByCode) {
        creditSummaryState.customerFilter = matchByCode.name;
    } else {
        creditSummaryState.customerFilter = val;
    }
}

function getAllCreditCustomerNames() {
    const names = new Set();
    const allRecords = DB.getAllRecords();
    allRecords.forEach(r => {
        if (r.creditCustomers) {
            r.creditCustomers.forEach(c => {
                const n = (c.name || '').trim();
                if (n) names.add(n);
            });
        }
    });
    return Array.from(names).sort();
}

function renderCreditSummary(el) {
    const st = creditSummaryState;
    el.innerHTML = `
    <div class="card">
        <div class="card-header"><h3>สรุปลูกหนี้เงินเชื่อ</h3></div>
        <div class="form-row" style="align-items:end;gap:12px;flex-wrap:wrap">
            <div class="form-group">
                <label>สาขา</label>
                <select onchange="creditSummaryState.stationId=this.value">
                    <option value="" ${st.stationId === '' ? 'selected' : ''}>ทุกสาขา</option>
                    ${REF.stations.map(s => `<option value="${s.id}" ${s.id === st.stationId ? 'selected' : ''}>${s.name}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>ช่วงเวลา</label>
                <div style="display:flex;gap:12px;align-items:center">
                    <label style="display:flex;align-items:center;gap:4px;cursor:pointer">
                        <input type="radio" name="creditMode" value="month" ${st.mode === 'month' ? 'checked' : ''} onchange="creditSummaryState.mode='month';renderCreditSummary(document.getElementById('pageContent'))"> รายเดือน
                    </label>
                    <label style="display:flex;align-items:center;gap:4px;cursor:pointer">
                        <input type="radio" name="creditMode" value="range" ${st.mode === 'range' ? 'checked' : ''} onchange="creditSummaryState.mode='range';renderCreditSummary(document.getElementById('pageContent'))"> ช่วงวันที่
                    </label>
                </div>
            </div>
            ${st.mode === 'month' ? `
                <div class="form-group">
                    <label>เดือน</label>
                    ${thaiMonthInput('creditMonth', st.month, "creditSummaryState.month=this.value")}
                </div>
            ` : `
                <div class="form-group">
                    <label>จากวันที่</label>
                    ${thaiDateInput('creditDateFrom', st.dateFrom, "creditSummaryState.dateFrom=this.value")}
                </div>
                <div class="form-group">
                    <label>ถึงวันที่</label>
                    ${thaiDateInput('creditDateTo', st.dateTo, "creditSummaryState.dateTo=this.value")}
                </div>
            `}
            <div class="form-group">
                <label>ชื่อลูกหนี้ (พิมพ์ชื่อหรือรหัส)</label>
                <input type="text" list="creditSummaryCustomerList" value="${st.customerFilter}"
                    onchange="onCreditSummaryCustomerFilter(this.value)"
                    oninput="onCreditSummaryCustomerFilter(this.value)"
                    placeholder="ทุกราย (พิมพ์ชื่อหรือรหัสเพื่อค้นหา)">
                <datalist id="creditSummaryCustomerList">
                    ${(typeof CREDIT_CUSTOMERS_MASTER !== 'undefined' ? CREDIT_CUSTOMERS_MASTER : []).map(c => `<option value="${c.name}" label="${c.code} - ${c.name}">`).join('')}
                </datalist>
            </div>
            <div class="form-group">
                <label>ชนิดน้ำมัน</label>
                <select onchange="creditSummaryState.fuelTypeFilter=this.value">
                    <option value="" ${st.fuelTypeFilter === '' ? 'selected' : ''}>ทุกชนิด</option>
                    ${Object.entries(REF.fuelTypeLabels).map(([key, label]) => `<option value="${key}" ${key === st.fuelTypeFilter ? 'selected' : ''}>${label}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" onclick="generateCreditSummary()">แสดงรายงาน</button>
            </div>
        </div>
    </div>
    <div id="creditSummaryResult"></div>
    <div id="creditManagementSection"></div>`;
    renderCreditManagement();
}

function generateCreditSummary() {
    const st = creditSummaryState;
    let startDate, endDate;

    if (st.mode === 'month') {
        const [y, m] = st.month.split('-').map(Number);
        startDate = new Date(y, m - 1, 1);
        endDate = new Date(y, m, 0); // last day of month
    } else {
        startDate = new Date(st.dateFrom);
        endDate = new Date(st.dateTo);
    }

    // Aggregate credit customers across selected stations and dates
    const customerMap = {}; // name → { totalAmount, totalLiters, entries[] }
    const stations = st.stationId ? REF.stations.filter(s => s.id === st.stationId) : REF.stations;

    stations.forEach(station => {
        const d = new Date(startDate);
        while (d <= endDate) {
            const dateStr = d.toISOString().split('T')[0];
            const record = DB.getDailyRecord(station.id, dateStr);
            if (record && record.creditCustomers && record.creditCustomers.length > 0) {
                record.creditCustomers.forEach(item => {
                    const name = (item.name || '').trim();
                    if (!name) return;
                    // Filter by customer name if specified
                    const filterStr = (st.customerFilter || '').trim().toLowerCase();
                    if (filterStr && !name.toLowerCase().includes(filterStr)) return;
                    // Filter by fuel type if specified
                    if (st.fuelTypeFilter && item.fuelType !== st.fuelTypeFilter) return;
                    const key = name.toLowerCase();
                    if (!customerMap[key]) {
                        const _ml = (typeof CREDIT_CUSTOMERS_MASTER !== 'undefined') ? CREDIT_CUSTOMERS_MASTER : [];
                        const _cm = _ml.find(c => c.name === name);
                        customerMap[key] = { displayName: name, code: _cm ? _cm.code : '9999', totalAmount: 0, totalLiters: 0, entries: [] };
                    }
                    const amt = parseNum(item.amount);
                    const lit = parseNum(item.liters);
                    customerMap[key].totalAmount += amt;
                    customerMap[key].totalLiters += lit;
                    customerMap[key].entries.push({
                        stationId: station.id,
                        stationName: station.name,
                        date: dateStr,
                        refNo: item.refNo || '-',
                        amount: amt,
                        fuelType: item.fuelType,
                        fuelLabel: REF.fuelTypeLabels[item.fuelType] || item.fuelType || '-',
                        liters: lit,
                        licensePlate: item.licensePlate || '-',
                    });
                });
            }
            d.setDate(d.getDate() + 1);
        }
    });

    // Sort entries within each customer by date first, then station
    Object.values(customerMap).forEach(c => {
        c.entries.sort((a, b) => a.date.localeCompare(b.date) || a.stationName.localeCompare(b.stationName));
    });
    // Sort customers by code ascending
    const customers = Object.values(customerMap).sort((a, b) => (a.code || '9999').localeCompare(b.code || '9999'));
    const grandTotal = customers.reduce((s, c) => s + c.totalAmount, 0);
    const grandLiters = customers.reduce((s, c) => s + c.totalLiters, 0);

    const periodLabel = st.mode === 'month'
        ? `เดือน ${formatDateThai(st.month + '-01').split(' ').slice(1).join(' ')}`
        : `${formatDateThai(st.dateFrom)} - ${formatDateThai(st.dateTo)}`;

    const stationLabel = st.stationId ? getStationName(st.stationId) : 'ทุกสาขา';

    let html = `<div class="card" style="margin-top:16px">
        <div class="card-header">
            <h3>รายงานลูกหนี้เงินเชื่อ: ${stationLabel} — ${periodLabel}</h3>
            <small style="color:var(--gray-400)">${customers.length} ราย | รวม ${fmt(grandTotal)} บาท</small>
        </div>`;

    // Store customers data globally for print
    window._creditCustomersData = customers;
    window._creditPeriodLabel = periodLabel;
    window._creditStationLabel = stationLabel;

    if (customers.length === 0) {
        html += `<div style="padding:32px;text-align:center;color:var(--gray-400)">ไม่พบรายการลูกหนี้เงินเชื่อในช่วงเวลาที่เลือก</div>`;
    } else {
        html += `<div style="display:flex;gap:8px;align-items:center;padding:12px 16px;border-bottom:1px solid var(--gray-200);flex-wrap:wrap">
            <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-weight:600;font-size:14px">
                <input type="checkbox" id="creditSelectAll" onchange="toggleCreditSelectAll(this.checked)"> เลือกทั้งหมด
            </label>
            <span id="creditSelectedCount" style="color:var(--gray-400);font-size:13px"></span>
            <div style="flex:1"></div>
            <label style="font-size:13px;color:var(--gray-500)">หัวบิล:
                <select onchange="creditSummaryState.billHeaderStationId=this.value" style="font-size:13px;padding:4px 8px;border:1px solid var(--gray-200);border-radius:var(--radius)">
                    <option value="">-- ไม่แสดงหัวบิล --</option>
                    ${REF.stations.map(s => `<option value="${s.id}" ${s.id === creditSummaryState.billHeaderStationId ? 'selected' : ''}>${s.businessName}</option>`).join('')}
                </select>
            </label>
            <button class="btn btn-primary btn-sm" onclick="printCreditReport()">🖨️ พิมพ์ใบเรียกเก็บ</button>
        </div>
        <div class="table-wrapper"><table class="compare-table">
            <thead>
                <tr>
                    <th style="width:40px"></th>
                    <th>ลำดับ</th>
                    <th>ชื่อลูกหนี้</th>
                    <th class="number">ลิตรรวม</th>
                    <th class="number">ยอดรวม (บาท)</th>
                    <th>รายละเอียด</th>
                </tr>
            </thead>
            <tbody>`;

        customers.forEach((cust, i) => {
            const rowId = 'credit-detail-' + i;
            html += `<tr>
                <td><input type="checkbox" class="credit-select-cb" data-idx="${i}" onchange="updateCreditSelectedCount()"></td>
                <td>${i + 1}</td>
                <td style="cursor:pointer" onclick="toggleCreditDetail('${rowId}')"><strong>${cust.displayName}</strong></td>
                <td class="number">${fmt(cust.totalLiters)}</td>
                <td class="number">${fmt(cust.totalAmount)}</td>
                <td style="cursor:pointer" onclick="toggleCreditDetail('${rowId}')"><span style="color:var(--primary);font-size:13px">▶ ${cust.entries.length} รายการ</span></td>
            </tr>
            <tr id="${rowId}" style="display:none">
                <td colspan="7" style="padding:0">
                    <div style="background:var(--gray-50);padding:12px;border-radius:var(--radius)">
                        <table style="width:100%;border-collapse:collapse;font-size:13px">
                            <thead><tr style="border-bottom:1px solid var(--gray-200)">
                                <th style="padding:6px 8px;text-align:left">วันที่</th>
                                <th style="padding:6px 8px;text-align:left">สาขา</th>
                                <th style="padding:6px 8px;text-align:left">เลขที่อ้างอิง</th>
                                <th style="padding:6px 8px;text-align:left">ทะเบียนรถ</th>
                                <th style="padding:6px 8px;text-align:left">ชนิดน้ำมัน</th>
                                <th style="padding:6px 8px;text-align:right">ลิตร</th>
                                <th style="padding:6px 8px;text-align:right">จำนวนเงิน</th>
                            </tr></thead>
                            <tbody>`;
            cust.entries.forEach(e => {
                html += `<tr style="border-bottom:1px solid var(--gray-100)">
                    <td style="padding:6px 8px">${formatDateThai(e.date)}</td>
                    <td style="padding:6px 8px">${e.stationName}</td>
                    <td style="padding:6px 8px">${e.refNo}</td>
                    <td style="padding:6px 8px">${e.licensePlate}</td>
                    <td style="padding:6px 8px">${e.fuelLabel}</td>
                    <td style="padding:6px 8px;text-align:right">${fmt(e.liters)}</td>
                    <td style="padding:6px 8px;text-align:right">${fmt(e.amount)}</td>
                </tr>`;
            });
            html += `</tbody></table></div></td></tr>`;
        });

        html += `</tbody>
            <tfoot>
                <tr class="table-row-summary">
                    <td></td>
                    <td colspan="2"><strong>รวมทั้งหมด</strong></td>
                    <td class="number"><strong>${fmt(grandLiters)}</strong></td>
                    <td class="number"><strong>${fmt(grandTotal)}</strong></td>
                    <td></td>
                </tr>
            </tfoot>
        </table></div>`;
    }

    html += `</div>`;
    const resultEl = document.getElementById('creditSummaryResult');
    resultEl.innerHTML = html;
    requestAnimationFrame(() => resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' }));
}

function toggleCreditDetail(rowId) {
    const row = document.getElementById(rowId);
    if (!row) return;
    const isHidden = row.style.display === 'none';
    row.style.display = isHidden ? '' : 'none';
    // Update arrow indicator
    const prevRow = row.previousElementSibling;
    if (prevRow) {
        const arrow = prevRow.querySelector('td:last-child span');
        if (arrow) {
            arrow.textContent = (isHidden ? '▼' : '▶') + arrow.textContent.substring(1);
        }
    }
}

function toggleCreditSelectAll(checked) {
    document.querySelectorAll('.credit-select-cb').forEach(cb => cb.checked = checked);
    updateCreditSelectedCount();
}

function updateCreditSelectedCount() {
    const all = document.querySelectorAll('.credit-select-cb');
    const checked = document.querySelectorAll('.credit-select-cb:checked');
    const countEl = document.getElementById('creditSelectedCount');
    if (countEl) countEl.textContent = checked.length > 0 ? `(เลือก ${checked.length} / ${all.length} ราย)` : '';
    const selectAllCb = document.getElementById('creditSelectAll');
    if (selectAllCb) selectAllCb.checked = checked.length === all.length && all.length > 0;
}

function printCreditReport() {
    const customers = window._creditCustomersData || [];
    const periodLabel = window._creditPeriodLabel || '';
    const stationLabel = window._creditStationLabel || '';
    const checkedIdxs = Array.from(document.querySelectorAll('.credit-select-cb:checked')).map(cb => parseInt(cb.dataset.idx));

    if (checkedIdxs.length === 0) {
        showToast('กรุณาเลือกลูกหนี้อย่างน้อย 1 ราย');
        return;
    }

    const selected = checkedIdxs.map(i => customers[i]).filter(Boolean);
    const totalAmt = selected.reduce((s, c) => s + c.totalAmount, 0);
    const totalLit = selected.reduce((s, c) => s + c.totalLiters, 0);

    // Bill header from selected company
    const billStation = creditSummaryState.billHeaderStationId
        ? REF.stations.find(s => s.id === creditSummaryState.billHeaderStationId)
        : null;

    let printHtml = `<html><head><meta charset="UTF-8">
        <title>ใบเรียกเก็บหนี้ - ลูกหนี้เงินเชื่อ</title>
        <style>
            body { font-family: 'Noto Sans Thai', sans-serif; font-size: 13px; margin: 20px; color: #000; }
            .bill-header { text-align: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 2px solid #333; }
            .bill-header .company-name { font-size: 20px; font-weight: 700; margin-bottom: 4px; }
            .bill-header .company-address { font-size: 13px; color: #333; margin-bottom: 2px; }
            .bill-header .company-tax { font-size: 13px; color: #555; }
            h2 { text-align: center; margin-bottom: 4px; }
            .subtitle { text-align: center; color: #666; margin-bottom: 16px; font-size: 13px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
            th, td { border: 1px solid #ccc; padding: 6px 8px; }
            th { background: #f5f5f5; font-weight: 600; }
            .number { text-align: right; }
            .customer-section { margin-bottom: 24px; page-break-inside: avoid; }
            .customer-header { background: #e8e8e8; padding: 8px 12px; font-weight: 700; font-size: 14px; border: 1px solid #ccc; border-bottom: none; }
            .summary-row { font-weight: 700; background: #f9f9f9; }
            .grand-total { font-size: 15px; font-weight: 700; margin-top: 12px; text-align: right; }
            @media print { body { margin: 10mm; } }
        </style></head><body>`;

    if (billStation) {
        printHtml += `<div class="bill-header">
            <div class="company-name">${billStation.businessName}</div>
            <div class="company-address">${billStation.address}</div>
            <div class="company-tax">เลขประจำตัวผู้เสียภาษี: ${billStation.taxId}</div>
        </div>`;
    }

    printHtml += `<h2>ใบเรียกเก็บหนี้ — ลูกหนี้เงินเชื่อ</h2>
        <div class="subtitle">${stationLabel} | ${periodLabel} | พิมพ์เมื่อ ${formatDateThai(todayStr())}</div>`;

    selected.forEach(cust => {
        printHtml += `<div class="customer-section">
            <div class="customer-header">${cust.displayName} — ยอดรวม ${fmt(cust.totalAmount)} บาท (${fmt(cust.totalLiters)} ลิตร)</div>
            <table>
                <thead><tr>
                    <th>วันที่</th><th>สาขา</th><th>เลขที่อ้างอิง</th><th>ทะเบียนรถ</th>
                    <th>ชนิดน้ำมัน</th><th class="number">ลิตร</th><th class="number">จำนวนเงิน</th>
                </tr></thead><tbody>`;
        cust.entries.forEach(e => {
            printHtml += `<tr>
                <td>${formatDateThai(e.date)}</td><td>${e.stationName}</td><td>${e.refNo}</td><td>${e.licensePlate}</td>
                <td>${e.fuelLabel}</td><td class="number">${fmt(e.liters)}</td><td class="number">${fmt(e.amount)}</td>
            </tr>`;
        });
        printHtml += `<tr class="summary-row">
                <td colspan="5">รวม ${cust.displayName}</td>
                <td class="number">${fmt(cust.totalLiters)}</td>
                <td class="number">${fmt(cust.totalAmount)}</td>
            </tr></tbody></table></div>`;
    });

    printHtml += `<div class="grand-total">รวมทั้งสิ้น ${selected.length} ราย: ${fmt(totalLit)} ลิตร | ${fmt(totalAmt)} บาท</div>
        </body></html>`;

    const w = window.open('', '_blank');
    w.document.write(printHtml);
    w.document.close();
    w.onload = () => { w.print(); };
}

// ===== CREDIT MANAGEMENT SYSTEM (จัดการลูกหนี้เงินเชื่อ) =====

function getCreditOutstandingByCustomer() {
    const allRecords = DB.getAllRecords();
    const payments = DB.getCreditPayments();
    const settings = DB.getCreditSettings();
    const customerMap = {};

    // Sum all credit sales per customer
    allRecords.forEach(r => {
        (r.creditCustomers || []).forEach(c => {
            const name = (c.name || '').trim();
            if (!name) return;
            if (!customerMap[name]) {
                const _ml = (typeof CREDIT_CUSTOMERS_MASTER !== 'undefined') ? CREDIT_CUSTOMERS_MASTER : [];
                const _cm = _ml.find(m => m.name === name);
                customerMap[name] = { name, code: (_cm ? _cm.code : c.cusCode) || '9999', totalCredit: 0, totalPaid: 0, entries: [], payments: [], oldestUnpaidDate: null };
            }
            customerMap[name].totalCredit += parseNum(c.amount);
            customerMap[name].entries.push({ date: r.date, stationId: r.stationId, stationName: getStationName(r.stationId), amount: parseNum(c.amount), fuelType: c.fuelType, liters: parseNum(c.liters), refNo: c.refNo || '' });
        });
    });

    // Sum all payments per customer
    payments.forEach(p => {
        const name = (p.customerName || '').trim();
        if (!name || !customerMap[name]) return;
        customerMap[name].totalPaid += parseNum(p.amount);
        customerMap[name].payments.push(p);
    });

    // Calculate outstanding and oldest unpaid date
    Object.values(customerMap).forEach(c => {
        c.outstanding = c.totalCredit - c.totalPaid;
        c.entries.sort((a, b) => a.date.localeCompare(b.date));
        // Find oldest unpaid: walk through entries, subtract payments
        let remaining = c.outstanding;
        if (remaining > 0 && c.entries.length > 0) {
            for (const e of c.entries) {
                if (remaining <= 0) break;
                c.oldestUnpaidDate = e.date;
                remaining -= e.amount;
            }
        }
        // Calculate overdue days
        if (c.oldestUnpaidDate) {
            const diffMs = new Date(todayStr()) - new Date(c.oldestUnpaidDate);
            c.overdueDays = Math.floor(diffMs / 86400000);
        } else {
            c.overdueDays = 0;
        }
        // Credit limit
        const limit = (settings.customerLimits && settings.customerLimits[c.name]) || settings.defaultCreditLimit || 50000;
        c.creditLimit = limit;
        c.isOverLimit = c.outstanding > limit;
        c.isOverdue = c.overdueDays > (settings.overdueDays || 30);
        c.isBlocked = c.isOverLimit || c.isOverdue;
    });

    return customerMap;
}

// Render credit management section in the credit summary page
function printDailyCreditAllStations() {
    var dateStr = document.getElementById('creditDailyPrintDate').value;
    if (!dateStr) { showToast('กรุณาเลือกวันที่', 'error'); return; }

    var allRecords = DB.getAllRecords();
    var dayRecords = allRecords.filter(function(r) { return r.date === dateStr; });

    // Collect all credit entries for this date across all stations
    var customerMap = {};
    dayRecords.forEach(function(r) {
        var stName = getStationName(r.stationId);
        (r.creditCustomers || []).forEach(function(c) {
            var name = (c.name || '').trim();
            if (!name) return;
            var code = c.cusCode || '';
            if (!code) {
                var ml = (typeof CREDIT_CUSTOMERS_MASTER !== 'undefined') ? CREDIT_CUSTOMERS_MASTER : [];
                var cm = ml.find(function(m) { return m.name === name; });
                if (cm) code = cm.code;
            }
            if (!customerMap[name]) {
                customerMap[name] = { name: name, code: code || '9999', entries: [], total: 0 };
            }
            var amt = parseNum(c.amount);
            customerMap[name].total += amt;
            customerMap[name].entries.push({
                station: stName,
                fuelType: c.fuelType,
                liters: parseNum(c.liters),
                amount: amt,
                refNo: c.refNo || '',
                licensePlate: c.licensePlate || ''
            });
        });
    });

    var customers = Object.values(customerMap);
    if (customers.length === 0) { showToast('ไม่พบรายการลูกหนี้เงินเชื่อในวันที่เลือก', 'error'); return; }

    // Sort by customer code
    customers.sort(function(a, b) { return (a.code || '9999').localeCompare(b.code || '9999'); });

    var grandTotal = 0;
    var rows = '';
    var idx = 0;
    customers.forEach(function(cust) {
        grandTotal += cust.total;
        if (cust.entries.length === 1) {
            var e = cust.entries[0];
            idx++;
            rows += '<tr>'
                + '<td style="text-align:center">' + idx + '</td>'
                + '<td style="text-align:center">' + cust.code + '</td>'
                + '<td>' + cust.name + '</td>'
                + '<td>' + e.station + '</td>'
                + '<td>' + (REF.fuelTypeLabels[e.fuelType] || e.fuelType || '-') + '</td>'
                + '<td style="text-align:right">' + fmt(e.liters) + '</td>'
                + '<td>' + (e.refNo || '-') + '</td>'
                + '<td>' + (e.licensePlate || '-') + '</td>'
                + '<td style="text-align:right;font-weight:bold">' + fmt(e.amount) + '</td>'
                + '</tr>';
        } else {
            // Multiple entries - show each then subtotal
            cust.entries.forEach(function(e, ei) {
                if (ei === 0) idx++;
                rows += '<tr>'
                    + '<td style="text-align:center">' + (ei === 0 ? idx : '') + '</td>'
                    + '<td style="text-align:center">' + (ei === 0 ? cust.code : '') + '</td>'
                    + '<td>' + (ei === 0 ? cust.name : '') + '</td>'
                    + '<td>' + e.station + '</td>'
                    + '<td>' + (REF.fuelTypeLabels[e.fuelType] || e.fuelType || '-') + '</td>'
                    + '<td style="text-align:right">' + fmt(e.liters) + '</td>'
                    + '<td>' + (e.refNo || '-') + '</td>'
                    + '<td>' + (e.licensePlate || '-') + '</td>'
                    + '<td style="text-align:right">' + fmt(e.amount) + '</td>'
                    + '</tr>';
            });
            rows += '<tr style="background:#f0f0f0;font-weight:bold">'
                + '<td colspan="8" style="text-align:right">รวม ' + cust.name + '</td>'
                + '<td style="text-align:right">' + fmt(cust.total) + '</td>'
                + '</tr>';
        }
    });

    var printHtml = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>สรุปลูกหนี้เงินเชื่อรายวัน</title>'
        + '<style>'
        + 'body{font-family:"Sarabun",sans-serif;font-size:11px;margin:0;padding:8px 15px;color:#333}'
        + '#content{transform-origin:top left}'
        + '.header{text-align:center;margin-bottom:8px;border-bottom:2px solid #333;padding-bottom:6px}'
        + '.header h2{margin:0;font-size:15px}'
        + '.header .date{font-size:13px;font-weight:bold;margin-top:4px}'
        + 'table{width:100%;border-collapse:collapse;margin-bottom:8px}'
        + 'th,td{padding:2px 6px;border:1px solid #ccc;font-size:10px}'
        + 'th{background:#f5f5f5;font-weight:bold;text-align:left}'
        + '.total-row{font-weight:bold;background:#e0e0e0}'
        + '.big-total{font-size:13px;font-weight:bold;padding:4px;margin:4px 0;border:2px solid #333;text-align:center}'
        + '.signature{margin-top:20px;display:flex;justify-content:space-around}'
        + '.signature div{text-align:center;width:160px}'
        + '.signature .line{border-bottom:1px solid #333;height:30px}'
        + '@media print{body{padding:4px 10px}@page{size:A4;margin:5mm}}'
        + '</style>'
        + '<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;700&display=swap" rel="stylesheet">'
        + '</head><body><div id="content">'

        + '<div class="header">'
        + '<h2>สรุปรายการลูกหนี้เงินเชื่อรายวัน (ทุกสาขา)</h2>'
        + '<div class="date">' + formatDateThai(dateStr) + '</div>'
        + '</div>'

        + '<table>'
        + '<thead><tr><th style="text-align:center">ลำดับ</th><th style="text-align:center">รหัส</th><th>ชื่อลูกหนี้</th><th>สาขา</th><th>ชนิดน้ำมัน</th><th style="text-align:right">ลิตร</th><th>เลขที่อ้างอิง</th><th>ทะเบียนรถ</th><th style="text-align:right">จำนวนเงิน</th></tr></thead>'
        + '<tbody>' + rows
        + '<tr class="total-row"><td colspan="8" style="text-align:right">รวมทั้งหมด (' + customers.length + ' ราย)</td><td style="text-align:right">' + fmt(grandTotal) + '</td></tr>'
        + '</tbody></table>'

        + '<div class="big-total">ยอดเงินเชื่อรวม: ' + fmt(grandTotal) + ' บาท</div>'

        + '<div class="signature">'
        + '<div><div class="line"></div><div>ผู้จัดทำ</div></div>'
        + '<div><div class="line"></div><div>ผู้ตรวจสอบ</div></div>'
        + '<div><div class="line"></div><div>ผู้อนุมัติ</div></div>'
        + '</div>'
        + '</div>'
        + '<script>'
        + 'window.addEventListener("load",function(){'
        + 'var c=document.getElementById("content");'
        + 'var pageH=1045;'
        + 'var h=c.scrollHeight;'
        + 'if(h>pageH){'
        + 'var s=pageH/h;'
        + 'c.style.transform="scale("+s+")";'
        + 'c.style.transformOrigin="top left";'
        + 'c.style.width=(100/s)+"%";'
        + '}'
        + 'setTimeout(function(){window.print();},300);'
        + '});'
        + '<\/script>'
        + '</body></html>';

    var printWin = window.open('', '_blank');
    printWin.document.write(printHtml);
    printWin.document.close();
}

function renderCreditManagement() {
    const container = document.getElementById('creditManagementSection');
    if (!container) return;
    const customerMap = getCreditOutstandingByCustomer();
    const settings = DB.getCreditSettings();
    const customers = Object.values(customerMap).filter(c => c.outstanding > 0 || c.totalCredit > 0);
    customers.sort((a, b) => (a.code || '9999').localeCompare(b.code || '9999'));

    const overdue = customers.filter(c => c.isOverdue);
    const blocked = customers.filter(c => c.isBlocked);

    let html = '';

    // 1. Overdue alerts
    if (overdue.length > 0) {
        html += `<div class="card credit-alert-card" style="margin-bottom:16px;border-left:4px solid #ef4444">
            <div class="card-header"><h3 style="color:#ef4444">⚠️ แจ้งเตือน: ลูกหนี้ค้างชำระเกิน ${settings.overdueDays || 30} วัน (${overdue.length} ราย)</h3></div>
            <div class="table-wrapper"><table>
                <thead><tr><th>รหัส</th><th>ชื่อลูกหนี้</th><th class="number">ยอดค้างชำระ</th><th class="number">ค้างมา (วัน)</th><th>วันที่เก่าสุด</th><th>สถานะ</th></tr></thead>
                <tbody>${overdue.map(c => `<tr style="background:#fef2f2">
                    <td>${c.code}</td><td><a href="#" onclick="event.preventDefault();showCustomerCreditDetail('${c.name.replace(/'/g, "\\'")}')" style="color:#ef4444;text-decoration:underline;font-weight:600;cursor:pointer">${c.name}</a></td><td class="number">${fmt(c.outstanding)}</td>
                    <td class="number" style="color:#ef4444;font-weight:600">${c.overdueDays}</td>
                    <td>${c.oldestUnpaidDate ? formatDateThai(c.oldestUnpaidDate) : '-'}</td>
                    <td>${c.isBlocked ? '<span style="background:#ef4444;color:white;padding:2px 8px;border-radius:4px;font-size:11px">งดเติม</span>' : ''}</td>
                </tr>`).join('')}</tbody>
            </table></div>
        </div>`;
    }

    // 2. Blocked customers (over limit)
    const overLimitOnly = blocked.filter(c => c.isOverLimit && !c.isOverdue);
    if (overLimitOnly.length > 0) {
        html += `<div class="card" style="margin-bottom:16px;border-left:4px solid #f59e0b">
            <div class="card-header"><h3 style="color:#f59e0b">⛔ งดเติม: เกินวงเงินเครดิต (${overLimitOnly.length} ราย)</h3></div>
            <div class="table-wrapper"><table>
                <thead><tr><th>รหัส</th><th>ชื่อลูกหนี้</th><th class="number">ยอดค้างชำระ</th><th class="number">วงเงิน</th><th class="number">เกินวงเงิน</th></tr></thead>
                <tbody>${overLimitOnly.map(c => `<tr style="background:#fffbeb">
                    <td>${c.code}</td><td><a href="#" onclick="event.preventDefault();showCustomerCreditDetail('${c.name.replace(/'/g, "\\'")}')" style="color:#f59e0b;text-decoration:underline;font-weight:600;cursor:pointer">${c.name}</a></td><td class="number">${fmt(c.outstanding)}</td>
                    <td class="number">${fmt(c.creditLimit)}</td>
                    <td class="number" style="color:#f59e0b;font-weight:600">${fmt(c.outstanding - c.creditLimit)}</td>
                </tr>`).join('')}</tbody>
            </table></div>
        </div>`;
    }

    // 3. Outstanding summary table with pagination
    const withOutstanding = customers.filter(c => c.outstanding > 0);
    const PER_PAGE = 30;
    const totalPages = Math.max(1, Math.ceil(withOutstanding.length / PER_PAGE));
    if (typeof window._creditPage === 'undefined' || window._creditPage >= totalPages) window._creditPage = 0;
    const curPage = window._creditPage || 0;
    const pageItems = withOutstanding.slice(curPage * PER_PAGE, (curPage + 1) * PER_PAGE);

    let rowsHtml = '';
    pageItems.forEach(function(c) {
        let status = '<span style="color:#10b981">ปกติ</span>';
        if (c.isOverdue) status = '<span style="background:#ef4444;color:white;padding:2px 8px;border-radius:4px;font-size:11px">ค้างเกินกำหนด</span>';
        else if (c.isOverLimit) status = '<span style="background:#f59e0b;color:white;padding:2px 8px;border-radius:4px;font-size:11px">เกินวงเงิน</span>';
        const esc = c.name.replace(/'/g, "\\'");
        rowsHtml += '<tr>'
            + '<td>' + c.code + '</td>'
            + '<td><a href="#" onclick="event.preventDefault();showCustomerCreditDetail(\'' + esc + '\')" style="color:var(--primary-600);text-decoration:underline;font-weight:600;cursor:pointer">' + c.name + '</a></td>'
            + '<td class="number">' + fmt(c.totalCredit) + '</td><td class="number">' + fmt(c.totalPaid) + '</td>'
            + '<td class="number" style="font-weight:600;color:' + (c.outstanding > 0 ? '#ef4444' : '#10b981') + '">' + fmt(c.outstanding) + '</td>'
            + '<td class="number">' + fmt(c.creditLimit) + '</td>'
            + '<td>' + status + '</td>'
            + '<td><button class="btn btn-sm btn-outline" onclick="showPaymentForm(\'' + esc + '\')">รับชำระ</button> '
            + '<button class="btn btn-sm" onclick="showPaymentHistory(\'' + esc + '\')">ประวัติ</button></td>'
            + '</tr>';
    });

    // Pagination buttons
    let paginationHtml = '';
    if (totalPages > 1) {
        paginationHtml = '<div class="pagination" style="margin-top:12px">';
        paginationHtml += '<button class="pagination-btn' + (curPage === 0 ? ' disabled' : '') + '" onclick="window._creditPage=' + (curPage - 1) + ';renderCreditManagement()"' + (curPage === 0 ? ' disabled' : '') + '>&laquo; ก่อนหน้า</button>';
        // Page numbers with ellipsis
        for (var p = 0; p < totalPages; p++) {
            if (p === 0 || p === totalPages - 1 || Math.abs(p - curPage) <= 2) {
                paginationHtml += '<button class="pagination-btn' + (p === curPage ? ' active' : '') + '" onclick="window._creditPage=' + p + ';renderCreditManagement()">' + (p + 1) + '</button>';
            } else if (Math.abs(p - curPage) === 3) {
                paginationHtml += '<span class="pagination-dots">...</span>';
            }
        }
        paginationHtml += '<button class="pagination-btn' + (curPage >= totalPages - 1 ? ' disabled' : '') + '" onclick="window._creditPage=' + (curPage + 1) + ';renderCreditManagement()"' + (curPage >= totalPages - 1 ? ' disabled' : '') + '>ถัดไป &raquo;</button>';
        paginationHtml += '</div>';
    }

    // Daily credit print section
    html += '<div class="card" style="margin-bottom:16px">'
        + '<div class="card-header"><h3>🖨️ พิมพ์ใบสรุปลูกหนี้รายวัน (ทุกสาขา)</h3></div>'
        + '<div style="display:flex;gap:12px;align-items:flex-end;padding:12px 16px;flex-wrap:wrap">'
        + '<div class="form-group" style="margin:0"><label style="font-size:12px;margin-bottom:4px">วันที่</label>'
        + '<input type="date" id="creditDailyPrintDate" value="' + todayStr() + '" style="padding:6px 10px"></div>'
        + '<button class="btn btn-primary" onclick="printDailyCreditAllStations()">🖨️ พิมพ์ใบสรุปลูกหนี้รายวัน</button>'
        + '</div></div>';

    html += '<div class="card" style="margin-bottom:16px">'
        + '<div class="card-header">'
        + '<h3>ยอดค้างชำระทั้งหมด (' + withOutstanding.length + ' ราย)</h3>'
        + '<div style="display:flex;gap:8px">'
        + '<button class="btn btn-sm btn-primary" onclick="showPaymentForm()">+ บันทึกรับชำระ</button>'
        + '<button class="btn btn-sm btn-outline" onclick="showCreditSettings()">ตั้งค่าวงเงิน</button>'
        + '</div></div>'
        + '<div class="table-wrapper"><table>'
        + '<thead><tr><th>รหัส</th><th>ชื่อลูกหนี้</th><th class="number">ยอดเครดิตรวม</th><th class="number">ชำระแล้ว</th><th class="number">ค้างชำระ</th><th class="number">วงเงิน</th><th>สถานะ</th><th></th></tr></thead>'
        + '<tbody>' + rowsHtml
        + '<tr class="drill-total-row"><td colspan="2"><strong>รวมทั้งหมด</strong></td>'
        + '<td class="number"><strong>' + fmt(withOutstanding.reduce(function(s,c){return s+c.totalCredit},0)) + '</strong></td>'
        + '<td class="number"><strong>' + fmt(withOutstanding.reduce(function(s,c){return s+c.totalPaid},0)) + '</strong></td>'
        + '<td class="number"><strong>' + fmt(withOutstanding.reduce(function(s,c){return s+c.outstanding},0)) + '</strong></td>'
        + '<td colspan="3"></td></tr>'
        + '</tbody></table></div>'
        + paginationHtml
        + '</div>';

    container.innerHTML = html;
}

// Customer credit detail drill-down (for invoicing)
function showCustomerCreditDetail(customerName) {
    const custMap = getCreditOutstandingByCustomer();
    const c = custMap[customerName];
    if (!c) { showToast('ไม่พบข้อมูลลูกค้า', 'error'); return; }

    const entries = [...c.entries].sort((a, b) => a.date.localeCompare(b.date));
    const payments = (c.payments || []).sort((a, b) => (a.paymentDate || '').localeCompare(b.paymentDate || ''));
    const methodLabels = { transfer: 'โอนเงิน', deposit: 'ใบนำฝาก', cash_check: 'เช็คเงินสด', cash: 'เงินสด', other: 'อื่นๆ' };
    const esc = customerName.replace(/'/g, "\\'");

    // Group entries by date for subtotals
    const byDate = {};
    entries.forEach(e => {
        if (!byDate[e.date]) byDate[e.date] = [];
        byDate[e.date].push(e);
    });

    let modal = document.getElementById('creditDetailModal');
    if (modal) modal.remove();
    modal = document.createElement('div');
    modal.id = 'creditDetailModal';
    modal.className = 'drill-fullpage';

    // Summary cards
    let statusText = '<span style="color:#10b981;font-weight:600">ปกติ</span>';
    if (c.isOverdue) statusText = '<span style="background:#ef4444;color:white;padding:4px 12px;border-radius:6px;font-weight:600">ค้างเกินกำหนด (' + c.overdueDays + ' วัน) — งดเติม</span>';
    else if (c.isOverLimit) statusText = '<span style="background:#f59e0b;color:white;padding:4px 12px;border-radius:6px;font-weight:600">เกินวงเงิน — งดเติม</span>';

    const summaryHtml = '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:16px">'
        + '<div class="card" style="padding:16px">'
        + '<div style="font-size:0.8rem;color:var(--gray-500)">รหัสลูกค้า</div>'
        + '<div style="font-size:1.1rem;font-weight:700">' + (c.code || '-') + '</div>'
        + '</div>'
        + '<div class="card" style="padding:16px">'
        + '<div style="font-size:0.8rem;color:var(--gray-500)">สถานะ</div>'
        + '<div style="font-size:1rem;margin-top:4px">' + statusText + '</div>'
        + '</div>'
        + '</div>'
        + '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px">'
        + '<div style="background:var(--gray-50);border-radius:8px;padding:12px;text-align:center">'
        + '<div style="font-size:0.75rem;color:var(--gray-500)">ยอดเครดิตรวม</div>'
        + '<div style="font-size:1.1rem;font-weight:700">' + fmt(c.totalCredit) + '</div></div>'
        + '<div style="background:var(--success-50);border-radius:8px;padding:12px;text-align:center">'
        + '<div style="font-size:0.75rem;color:var(--gray-500)">ชำระแล้ว</div>'
        + '<div style="font-size:1.1rem;font-weight:700;color:var(--success-600)">' + fmt(c.totalPaid) + '</div></div>'
        + '<div style="background:' + (c.outstanding > 0 ? 'var(--warning-50)' : 'var(--success-50)') + ';border-radius:8px;padding:12px;text-align:center">'
        + '<div style="font-size:0.75rem;color:var(--gray-500)">ยอดคงค้าง</div>'
        + '<div style="font-size:1.1rem;font-weight:700;color:' + (c.outstanding > 0 ? 'var(--warning-600)' : 'var(--success-600)') + '">' + fmt(c.outstanding) + '</div></div>'
        + '<div style="background:var(--gray-50);border-radius:8px;padding:12px;text-align:center">'
        + '<div style="font-size:0.75rem;color:var(--gray-500)">วงเงิน</div>'
        + '<div style="font-size:1.1rem;font-weight:700">' + fmt(c.creditLimit) + '</div></div>'
        + '</div>';

    // Credit entries table
    let entriesHtml = '<div class="card" style="margin-bottom:16px">'
        + '<div class="card-header"><h3>รายการเงินเชื่อ (' + entries.length + ' รายการ)</h3></div>'
        + '<div class="table-wrapper"><table>'
        + '<thead><tr><th>วันที่</th><th>สถานี</th><th>ชนิดน้ำมัน</th><th class="number">ลิตร</th><th class="number">จำนวนเงิน (บาท)</th><th>เลขที่อ้างอิง</th></tr></thead>'
        + '<tbody>';

    let grandTotal = 0;
    Object.keys(byDate).sort().forEach(function(date) {
        const dayEntries = byDate[date];
        dayEntries.forEach(function(e) {
            grandTotal += e.amount;
            entriesHtml += '<tr>'
                + '<td>' + formatDateThai(e.date) + '</td>'
                + '<td>' + (e.stationName || '-') + '</td>'
                + '<td>' + (e.fuelType || '-') + '</td>'
                + '<td class="number">' + fmt(e.liters) + '</td>'
                + '<td class="number">' + fmt(e.amount) + '</td>'
                + '<td>' + (e.refNo || '-') + '</td>'
                + '</tr>';
        });
        // Day subtotal if multiple entries
        if (dayEntries.length > 1) {
            var daySum = dayEntries.reduce(function(s, e) { return s + e.amount; }, 0);
            entriesHtml += '<tr style="background:var(--primary-50);font-weight:600">'
                + '<td colspan="4" style="text-align:right">รวมวันที่ ' + formatDateThai(date) + '</td>'
                + '<td class="number">' + fmt(daySum) + '</td>'
                + '<td></td></tr>';
        }
    });

    entriesHtml += '<tr class="drill-total-row"><td colspan="4"><strong>รวมทั้งหมด</strong></td>'
        + '<td class="number"><strong>' + fmt(grandTotal) + '</strong></td><td></td></tr>'
        + '</tbody></table></div></div>';

    // Payment history summary
    let paymentsHtml = '';
    if (payments.length > 0) {
        paymentsHtml = '<div class="card" style="margin-bottom:16px">'
            + '<div class="card-header"><h3>ประวัติการรับชำระ (' + payments.length + ' รายการ)</h3></div>'
            + '<div class="table-wrapper"><table>'
            + '<thead><tr><th>วันที่</th><th>ช่องทาง</th><th>ประเภท</th><th class="number">จำนวนเงิน</th><th>หมายเหตุ</th></tr></thead>'
            + '<tbody>';
        payments.forEach(function(p) {
            paymentsHtml += '<tr>'
                + '<td>' + formatDateThai(p.paymentDate) + '</td>'
                + '<td>' + (methodLabels[p.paymentMethod] || p.paymentMethod || '-') + '</td>'
                + '<td>' + (p.payType === 'partial' ? '<span style="color:var(--warning-600);font-weight:600">แบ่งชำระ</span>' : 'เต็มจำนวน') + '</td>'
                + '<td class="number">' + fmt(p.amount) + '</td>'
                + '<td>' + (p.note || '-') + '</td>'
                + '</tr>';
        });
        var totalPayments = payments.reduce(function(s, p) { return s + parseNum(p.amount); }, 0);
        paymentsHtml += '<tr class="drill-total-row"><td colspan="3"><strong>รวมชำระ</strong></td>'
            + '<td class="number"><strong>' + fmt(totalPayments) + '</strong></td><td></td></tr>'
            + '</tbody></table></div></div>';
    }

    modal.innerHTML = '<div class="drill-fullpage-header">'
        + '<button class="btn btn-outline drill-back-btn" onclick="document.getElementById(\'creditDetailModal\').remove()">'
        + '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> กลับ'
        + '</button>'
        + '<h2>รายละเอียดลูกหนี้: ' + customerName + '</h2>'
        + '<div style="display:flex;gap:8px">'
        + '<button class="btn btn-sm btn-primary" onclick="document.getElementById(\'creditDetailModal\').remove();showPaymentForm(\'' + esc + '\')">รับชำระ</button>'
        + '<button class="btn btn-sm btn-outline" onclick="document.getElementById(\'creditDetailModal\').remove();showPaymentHistory(\'' + esc + '\')">ประวัติชำระเต็ม</button>'
        + '</div>'
        + '</div>'
        + '<div class="drill-fullpage-body">'
        + summaryHtml
        + entriesHtml
        + paymentsHtml
        + '</div>';

    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('active'));
}

// Payment form modal
function showPaymentForm(customerName) {
    const masterList = (typeof CREDIT_CUSTOMERS_MASTER !== 'undefined') ? CREDIT_CUSTOMERS_MASTER : [];
    const nameOptions = getAllCreditCustomerNames().map(n => `<option value="${n}">`).join('');
    const codeOptions = masterList.map(c => `<option value="${c.code}">${c.name}</option>`).join('');
    const match = customerName ? masterList.find(c => c.name === customerName) : null;
    const custOutstanding = customerName ? getCreditOutstandingByCustomer() : {};
    const custInfo = customerName ? custOutstanding[customerName] : null;
    const outstandingAmt = custInfo ? custInfo.outstanding : 0;

    let modal = document.getElementById('paymentFormModal');
    if (modal) modal.remove();
    modal = document.createElement('div');
    modal.id = 'paymentFormModal';
    modal.className = 'drill-fullpage';
    modal.innerHTML = `
        <div class="drill-fullpage-header">
            <button class="btn btn-outline drill-back-btn" onclick="document.getElementById('paymentFormModal').remove();renderCreditManagement()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> กลับ
            </button>
            <h2>บันทึกรับชำระหนี้</h2>
        </div>
        <div class="drill-fullpage-body" style="max-width:600px;margin:0 auto">
            <div class="card">
                <div class="card-header"><h3>รายละเอียดการชำระ</h3></div>
                <div style="padding:16px;display:flex;flex-direction:column;gap:12px">
                    <div class="filter-group">
                        <label>ชื่อลูกหนี้</label>
                        <input type="text" id="pmtCustomerName" value="${customerName || ''}" list="pmtCusList" placeholder="พิมพ์ชื่อเพื่อค้นหา">
                        <datalist id="pmtCusList">${nameOptions}</datalist>
                    </div>
                    <div class="filter-group">
                        <label>รหัสลูกหนี้</label>
                        <input type="text" id="pmtCustomerCode" value="${match ? match.code : ''}" list="pmtCodeList" placeholder="พิมพ์รหัสเพื่อค้นหา">
                        <datalist id="pmtCodeList">${codeOptions}</datalist>
                    </div>
                    <div id="pmtOutstandingBox" style="display:${outstandingAmt > 0 ? 'block' : 'none'};background:var(--warning-50);border:1px solid var(--warning-200);border-radius:8px;padding:12px">
                        <div style="font-size:0.85rem;color:var(--gray-500)">ยอดคงค้างปัจจุบัน</div>
                        <div id="pmtOutstandingAmt" style="font-size:1.4rem;font-weight:700;color:var(--warning-600)">${fmt(outstandingAmt)} บาท</div>
                    </div>
                    <div class="filter-group">
                        <label>ประเภทการชำระ</label>
                        <select id="pmtPayType" onchange="pmtPayTypeChanged()">
                            <option value="full">ชำระเต็มจำนวน</option>
                            <option value="partial">แบ่งชำระ</option>
                        </select>
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
                        <div class="filter-group">
                            <label>วันที่ชำระ</label>
                            <input type="date" id="pmtDate" value="${todayStr()}">
                        </div>
                        <div class="filter-group">
                            <label>จำนวนเงิน (บาท)</label>
                            <input type="number" step="0.01" id="pmtAmount" value="${outstandingAmt > 0 ? outstandingAmt : ''}" placeholder="0.00" oninput="pmtUpdateRemaining()">
                        </div>
                    </div>
                    <div id="pmtRemainingBox" style="display:none;background:var(--gray-50);border:1px solid var(--gray-200);border-radius:8px;padding:12px">
                        <div style="font-size:0.85rem;color:var(--gray-500)">ยอดคงค้างหลังชำระครั้งนี้</div>
                        <div id="pmtRemainingAmt" style="font-size:1.2rem;font-weight:700;color:var(--primary-600)">0 บาท</div>
                    </div>
                    <div class="filter-group">
                        <label>ช่องทางชำระ</label>
                        <select id="pmtMethod">
                            <option value="transfer">โอนเงิน</option>
                            <option value="deposit">ใบนำฝาก</option>
                            <option value="cash_check">เช็คเงินสด</option>
                            <option value="cash">เงินสด</option>
                            <option value="other">อื่นๆ</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>แนบหลักฐาน (สลิป/ใบนำฝาก/เช็ค)</label>
                        <div id="pmtSlipPreview" style="margin-bottom:8px"></div>
                        <label class="btn btn-outline btn-sm" style="cursor:pointer;display:inline-block">
                            <input type="file" accept="image/*" style="display:none" onchange="previewPaymentSlip(this)"> เลือกรูปภาพ
                        </label>
                    </div>
                    <div class="filter-group">
                        <label>หมายเหตุ</label>
                        <input type="text" id="pmtNote" placeholder="รายละเอียดเพิ่มเติม">
                    </div>
                    <button class="btn btn-primary" onclick="savePaymentRecord()" style="margin-top:8px">บันทึกการรับชำระ</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('active'));

    // Auto-fill code when name changes + update outstanding
    document.getElementById('pmtCustomerName').addEventListener('change', function() {
        const m = masterList.find(c => c.name === this.value);
        if (m) document.getElementById('pmtCustomerCode').value = m.code;
        pmtUpdateOutstanding(this.value);
    });
    // Auto-fill name when code changes + update outstanding
    document.getElementById('pmtCustomerCode').addEventListener('change', function() {
        const m = masterList.find(c => c.code === this.value);
        if (m) {
            document.getElementById('pmtCustomerName').value = m.name;
            pmtUpdateOutstanding(m.name);
        }
    });
    // Trigger initial state
    pmtPayTypeChanged();
}

let _pmtCurrentOutstanding = 0;

function pmtUpdateOutstanding(customerName) {
    const map = getCreditOutstandingByCustomer();
    const info = map[customerName];
    _pmtCurrentOutstanding = info ? info.outstanding : 0;
    const box = document.getElementById('pmtOutstandingBox');
    const amtEl = document.getElementById('pmtOutstandingAmt');
    if (_pmtCurrentOutstanding > 0) {
        box.style.display = 'block';
        amtEl.textContent = fmt(_pmtCurrentOutstanding) + ' บาท';
        // Auto-set amount for full payment
        if (document.getElementById('pmtPayType').value === 'full') {
            document.getElementById('pmtAmount').value = _pmtCurrentOutstanding;
        }
    } else {
        box.style.display = 'none';
    }
    pmtUpdateRemaining();
}

function pmtPayTypeChanged() {
    const payType = document.getElementById('pmtPayType').value;
    const amtField = document.getElementById('pmtAmount');
    const box = document.getElementById('pmtOutstandingBox');
    const outstanding = parseFloat(box ? document.getElementById('pmtOutstandingAmt').textContent.replace(/[^0-9.-]/g, '') : 0) || _pmtCurrentOutstanding || 0;
    if (payType === 'full') {
        if (outstanding > 0) amtField.value = outstanding;
        document.getElementById('pmtRemainingBox').style.display = 'none';
    } else {
        amtField.value = '';
        amtField.placeholder = 'ระบุจำนวนที่ชำระบางส่วน';
        document.getElementById('pmtRemainingBox').style.display = outstanding > 0 ? 'block' : 'none';
        pmtUpdateRemaining();
    }
}

function pmtUpdateRemaining() {
    const box = document.getElementById('pmtRemainingBox');
    if (!box) return;
    const payType = document.getElementById('pmtPayType').value;
    if (payType === 'full') { box.style.display = 'none'; return; }
    const amt = parseNum(document.getElementById('pmtAmount').value);
    const outstanding = _pmtCurrentOutstanding || 0;
    if (outstanding <= 0) { box.style.display = 'none'; return; }
    box.style.display = 'block';
    const remaining = outstanding - amt;
    const el = document.getElementById('pmtRemainingAmt');
    el.textContent = fmt(Math.max(remaining, 0)) + ' บาท';
    el.style.color = remaining > 0 ? 'var(--warning-600)' : 'var(--success-600)';
}

let _paymentSlipData = null;
function previewPaymentSlip(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        _paymentSlipData = e.target.result;
        document.getElementById('pmtSlipPreview').innerHTML = `
            <div style="position:relative;display:inline-block">
                <img src="${_paymentSlipData}" style="max-width:200px;max-height:200px;border-radius:8px;border:1px solid var(--gray-200)">
                <button class="btn-delete-row" style="position:absolute;top:-8px;right:-8px" onclick="_paymentSlipData=null;document.getElementById('pmtSlipPreview').innerHTML=''">&#10005;</button>
            </div>`;
    };
    reader.readAsDataURL(file);
}

function savePaymentRecord() {
    const name = document.getElementById('pmtCustomerName').value.trim();
    const code = document.getElementById('pmtCustomerCode').value.trim();
    const date = document.getElementById('pmtDate').value;
    const amount = parseNum(document.getElementById('pmtAmount').value);
    const method = document.getElementById('pmtMethod').value;
    const note = document.getElementById('pmtNote').value.trim();

    if (!name) { showToast('กรุณาระบุชื่อลูกหนี้', 'error'); return; }
    if (!amount || amount <= 0) { showToast('กรุณาระบุจำนวนเงิน', 'error'); return; }
    if (!date) { showToast('กรุณาระบุวันที่', 'error'); return; }

    const payType = document.getElementById('pmtPayType').value;
    const outstanding = _pmtCurrentOutstanding || 0;

    const payment = {
        customerName: name,
        customerCode: code,
        paymentDate: date,
        amount: amount,
        paymentMethod: method,
        payType: payType,
        outstandingBefore: outstanding,
        outstandingAfter: Math.max(outstanding - amount, 0),
        slipImage: _paymentSlipData || null,
        note: note,
        recordedBy: (Auth.currentUser && Auth.currentUser.id) || null,
    };

    DB.saveCreditPayment(payment);
    _paymentSlipData = null;
    showToast('บันทึกการรับชำระสำเร็จ');
    document.getElementById('paymentFormModal').remove();
    renderCreditManagement();
}

// Payment history per customer
function showPaymentHistory(customerName) {
    const payments = DB.getCreditPaymentsByCustomer(customerName).sort((a, b) => (a.paymentDate || '').localeCompare(b.paymentDate || ''));
    const methodLabels = { transfer: 'โอนเงิน', deposit: 'ใบนำฝาก', cash_check: 'เช็คเงินสด', cash: 'เงินสด', other: 'อื่นๆ' };
    const custMap = getCreditOutstandingByCustomer();
    const custInfo = custMap[customerName];
    const totalCredit = custInfo ? custInfo.totalCredit : 0;
    const currentOutstanding = custInfo ? custInfo.outstanding : 0;
    const totalPaid = payments.reduce((s, p) => s + parseNum(p.amount), 0);

    // Calculate running outstanding per payment (oldest first)
    let runningOutstanding = totalCredit;
    const paymentRows = payments.map(p => {
        runningOutstanding -= parseNum(p.amount);
        return { ...p, remainingAfter: Math.max(runningOutstanding, 0) };
    });
    // Reverse for display (newest first)
    const displayRows = [...paymentRows].reverse();

    let modal = document.getElementById('paymentHistoryModal');
    if (modal) modal.remove();
    modal = document.createElement('div');
    modal.id = 'paymentHistoryModal';
    modal.className = 'drill-fullpage';

    const summaryHtml = '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px">'
        + '<div style="background:var(--gray-50);border-radius:8px;padding:12px;text-align:center">'
        + '<div style="font-size:0.8rem;color:var(--gray-500)">ยอดเครดิตทั้งหมด</div>'
        + '<div style="font-size:1.2rem;font-weight:700">' + fmt(totalCredit) + '</div></div>'
        + '<div style="background:var(--success-50);border-radius:8px;padding:12px;text-align:center">'
        + '<div style="font-size:0.8rem;color:var(--gray-500)">ชำระแล้ว</div>'
        + '<div style="font-size:1.2rem;font-weight:700;color:var(--success-600)">' + fmt(totalPaid) + '</div></div>'
        + '<div style="background:' + (currentOutstanding > 0 ? 'var(--warning-50)' : 'var(--success-50)') + ';border-radius:8px;padding:12px;text-align:center">'
        + '<div style="font-size:0.8rem;color:var(--gray-500)">ยอดคงค้าง</div>'
        + '<div style="font-size:1.2rem;font-weight:700;color:' + (currentOutstanding > 0 ? 'var(--warning-600)' : 'var(--success-600)') + '">' + fmt(currentOutstanding) + '</div></div>'
        + '</div>';

    modal.innerHTML = '<div class="drill-fullpage-header">'
        + '<button class="btn btn-outline drill-back-btn" onclick="document.getElementById(\'paymentHistoryModal\').remove()">'
        + '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> กลับ'
        + '</button>'
        + '<h2>ประวัติการรับชำระ: ' + customerName + '</h2>'
        + '<div class="drill-record-count">' + payments.length + ' รายการ</div>'
        + '</div>'
        + '<div class="drill-fullpage-body">'
        + summaryHtml
        + (payments.length === 0
            ? '<div class="card"><div style="text-align:center;padding:48px;color:var(--gray-400)">ยังไม่มีประวัติการรับชำระ</div></div>'
            : '<div class="table-wrapper"><table>'
            + '<thead><tr><th>วันที่</th><th>ช่องทาง</th><th>ประเภท</th><th class="number">จำนวนเงิน</th><th class="number">ยอดคงค้าง</th><th>หลักฐาน</th><th>หมายเหตุ</th>' + (Auth.isAdmin() ? '<th></th>' : '') + '</tr></thead>'
            + '<tbody>'
            + displayRows.map(function(p) {
                var escapedName = customerName.replace(/'/g, "\\'");
                return '<tr>'
                    + '<td>' + formatDateThai(p.paymentDate) + '</td>'
                    + '<td>' + (methodLabels[p.paymentMethod] || p.paymentMethod) + '</td>'
                    + '<td>' + (p.payType === 'partial' ? '<span style="color:var(--warning-600);font-weight:600">แบ่งชำระ</span>' : 'เต็มจำนวน') + '</td>'
                    + '<td class="number">' + fmt(p.amount) + '</td>'
                    + '<td class="number" style="font-weight:600;color:' + (p.remainingAfter > 0 ? 'var(--warning-600)' : 'var(--success-600)') + '">' + fmt(p.remainingAfter) + '</td>'
                    + '<td>' + (p.slipImage ? '<img src="' + p.slipImage + '" style="max-width:60px;max-height:60px;border-radius:4px;cursor:pointer" onclick="previewSlip(this.src)">' : '-') + '</td>'
                    + '<td>' + (p.note || '-') + '</td>'
                    + (Auth.isAdmin() ? '<td><button class="btn-delete-row" onclick="if(confirm(\'ลบรายการนี้?\')){DB.deleteCreditPayment(\'' + p.id + '\');document.getElementById(\'paymentHistoryModal\').remove();showPaymentHistory(\'' + escapedName + '\');}">&#10005;</button></td>' : '')
                    + '</tr>';
            }).join('')
            + '</tbody></table></div>')
        + '</div>';
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('active'));
}

// Credit settings modal
function showCreditSettings() {
    const settings = DB.getCreditSettings();
    let modal = document.getElementById('creditSettingsModal');
    if (modal) modal.remove();
    modal = document.createElement('div');
    modal.id = 'creditSettingsModal';
    modal.className = 'drill-fullpage';
    modal.innerHTML = `
        <div class="drill-fullpage-header">
            <button class="btn btn-outline drill-back-btn" onclick="document.getElementById('creditSettingsModal').remove()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> กลับ
            </button>
            <h2>ตั้งค่าเงื่อนไขเครดิต</h2>
        </div>
        <div class="drill-fullpage-body" style="max-width:500px;margin:0 auto">
            <div class="card">
                <div style="padding:16px;display:flex;flex-direction:column;gap:16px">
                    <div class="filter-group">
                        <label>จำนวนวันที่ถือว่าค้างชำระเกินกำหนด</label>
                        <input type="number" id="csOverdueDays" value="${settings.overdueDays || 30}" min="1"> <small style="color:var(--gray-400)">วัน (ค่าเริ่มต้น 30 วัน)</small>
                    </div>
                    <div class="filter-group">
                        <label>วงเงินเครดิตเริ่มต้น (บาท)</label>
                        <input type="number" id="csDefaultLimit" value="${settings.defaultCreditLimit || 50000}" step="1000"> <small style="color:var(--gray-400)">ใช้กับลูกหนี้ทุกรายที่ไม่ได้ตั้งค่าเฉพาะ</small>
                    </div>
                    <button class="btn btn-primary" onclick="saveCreditSettingsForm()">บันทึกการตั้งค่า</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('active'));
}

function saveCreditSettingsForm() {
    const settings = DB.getCreditSettings();
    settings.overdueDays = parseInt(document.getElementById('csOverdueDays').value) || 30;
    settings.defaultCreditLimit = parseNum(document.getElementById('csDefaultLimit').value) || 50000;
    DB.saveCreditSettings(settings);
    showToast('บันทึกการตั้งค่าสำเร็จ');
    document.getElementById('creditSettingsModal').remove();
    renderCreditManagement();
}

// Overdue warning in daily entry credit tab
function getCreditWarningForCustomer(customerName) {
    if (!customerName) return null;
    const map = getCreditOutstandingByCustomer();
    const c = map[customerName];
    if (!c) return null;
    if (c.isBlocked) {
        if (c.isOverdue) return { type: 'danger', msg: `⚠️ งดเติม: ค้างชำระ ${c.overdueDays} วัน (ยอดค้าง ${fmt(c.outstanding)} บาท)` };
        if (c.isOverLimit) return { type: 'warning', msg: `⛔ งดเติม: เกินวงเงิน ${fmt(c.creditLimit)} บาท (ค้าง ${fmt(c.outstanding)} บาท)` };
    }
    return null;
}

// ===== TAX REPORTS PAGE =====
const BUSINESS_INFO = {
    name: 'ห้างหุ้นส่วนจำกัด ที.วี.เอส. ออยล์',
    taxId: '0 3335 4500 0912',
    defaultAddress: '239 ม.7 ต.หนองไผ่ อ.เมือง จ.ศรีสะเกษ 33000',
};

let taxReportState = { type: 'A', stationId: '', date: todayStr(), month: todayStr().substring(0, 7) };
let taxEntryFormData = { selfUseItems: [], discountItems: [] };
let deliveryDocsFormData = [];

function renderTaxReports(el) {
    const st = taxReportState;
    el.innerHTML = `
        <div class="card report-filters" id="reportFilters">
            <div class="card-header"><h3>เลือกรายงาน</h3></div>
            <div class="form-row">
                <div class="form-group">
                    <label>ประเภทรายงาน</label>
                    <select id="reportType" onchange="onReportTypeChange(this.value)">
                        <option value="A" ${st.type==='A'?'selected':''}>ส่วน ก - มิเตอร์หัวจ่าย (รายวัน)</option>
                        <option value="A-monthly" ${st.type==='A-monthly'?'selected':''}>ส่วน ก - สรุปรายเดือน</option>
                        <option value="B" ${st.type==='B'?'selected':''}>ส่วน ข - สต็อกก้นถัง (รายวัน)</option>
                        <option value="C" ${st.type==='C'?'selected':''}>ส่วน ค - สรุปยอดน้ำมัน (รายเดือน)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>สถานี</label>
                    <select id="reportStation" onchange="taxReportState.stationId=this.value;loadTaxEntryForReport();renderTaxEntryForm();loadDeliveryDocsForReport();renderDeliveryDocsForm()">
                        <option value="">-- เลือกสถานี --</option>
                        ${REF.stations.map(s => `<option value="${s.id}" ${s.id===st.stationId?'selected':''}>${s.name}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group" id="reportDateGroup">
                    <label>${(st.type==='C' || st.type==='A-monthly')?'เดือน':'วันที่'}</label>
                    ${(st.type==='C' || st.type==='A-monthly')
                        ? `<input type="month" id="reportMonth" value="${st.month}" onchange="taxReportState.month=this.value">`
                        : `<input type="date" id="reportDate" value="${st.date}" onchange="taxReportState.date=this.value;loadTaxEntryForReport();renderTaxEntryForm();loadDeliveryDocsForReport();renderDeliveryDocsForm()">`
                    }
                </div>
            </div>
            <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px">
                <button class="btn btn-primary" onclick="generateTaxReport()">แสดงรายงาน</button>
                <button class="btn btn-outline" onclick="printTaxReport()">🖨️ พิมพ์</button>
            </div>
        </div>
        <div id="taxEntryFormContainer"></div>
        <div id="deliveryDocsFormContainer"></div>
        <div id="reportOutput"></div>
    `;
    // Show tax entry form when type=A and station selected
    if (st.type === 'A' && st.stationId) {
        loadTaxEntryForReport();
        renderTaxEntryForm();
    }
    // Show delivery docs form when type=B and station selected
    if (st.type === 'B' && st.stationId) {
        loadDeliveryDocsForReport();
        renderDeliveryDocsForm();
    }
}

// Helper: create print overlay with pages, auto-zoom to fit A4 landscape, then print
function doPrintOverlay(pagesHtml) {
    const overlay = document.createElement('div');
    overlay.id = 'tax-print-overlay';
    overlay.innerHTML = pagesHtml.map(h => `<div class="print-page">${h}</div>`).join('');
    document.body.appendChild(overlay);

    const pageW = 1085; // 287mm printable
    const pageH = 756;  // 200mm printable
    requestAnimationFrame(() => {
        overlay.querySelectorAll('.print-page .tax-report').forEach(rpt => {
            const scale = Math.min(1, pageW / rpt.scrollWidth, pageH / rpt.scrollHeight);
            rpt.style.zoom = scale;
        });
        requestAnimationFrame(() => {
            window.print();
            document.body.removeChild(overlay);
        });
    });
}

function printTaxReport() {
    const { type, stationId, date, month } = taxReportState;
    if (!stationId) { showToast('กรุณาเลือกสถานี', 'error'); return; }

    if (type === 'A') {
        // Report A: 2 pages (split tank groups)
        const page1 = generateReportA(stationId, date, { page: 1 });
        const page2 = generateReportA(stationId, date, { page: 2 });
        doPrintOverlay([page1, page2]);
    } else if (type === 'A-monthly') {
        // Report A Monthly: 2 pages
        const page1 = generateReportAMonthly(stationId, month, { page: 1 });
        const page2 = generateReportAMonthly(stationId, month, { page: 2 });
        doPrintOverlay([page1, page2]);
    } else if (type === 'B') {
        // Report B: 1 page
        const html = generateReportB(stationId, date);
        doPrintOverlay([html]);
    } else if (type === 'C') {
        // Report C: 1 page
        const html = generateReportC(stationId, month);
        doPrintOverlay([html]);
    }
}

function onReportTypeChange(type) {
    taxReportState.type = type;
    renderTaxReports(document.getElementById('pageContent'));
}

function generateTaxReport() {
    const { type, stationId, date, month } = taxReportState;
    if (!stationId) { showToast('กรุณาเลือกสถานี', 'error'); return; }
    const outEl = document.getElementById('reportOutput');
    if (type === 'A') outEl.innerHTML = generateReportA(stationId, date);
    else if (type === 'A-monthly') outEl.innerHTML = generateReportAMonthly(stationId, month);
    else if (type === 'B') outEl.innerHTML = generateReportB(stationId, date);
    else if (type === 'C') outEl.innerHTML = generateReportC(stationId, month);
}

// ===== TAX ENTRY FORM (in tax reports page) =====
function loadTaxEntryForReport() {
    const { stationId, date } = taxReportState;
    const empty = { selfUseItems: [], discountItems: [] };
    if (!stationId || !date) { taxEntryFormData = empty; return; }
    const entry = DB.getTaxEntry(stationId, date);
    if (!entry) {
        // Auto-populate from daily record's internalUsage if available
        const dailyRecord = DB.getDailyRecord(stationId, date);
        if (dailyRecord && dailyRecord.internalUsage && dailyRecord.internalUsage.length > 0) {
            taxEntryFormData = {
                selfUseItems: dailyRecord.internalUsage.filter(i => i.tankKey && parseNum(i.liters) > 0).map(i => ({ tankKey: i.tankKey, liters: i.liters })),
                discountItems: [],
            };
        } else {
            taxEntryFormData = empty;
        }
        return;
    }
    // Current format: separate selfUseItems + discountItems
    if (entry.selfUseItems || entry.discountItems) {
        taxEntryFormData = { selfUseItems: entry.selfUseItems || [], discountItems: entry.discountItems || [] };
    } else if (entry.items) {
        // Migrate from combined items format
        const selfUseItems = [], discountItems = [];
        entry.items.forEach(item => {
            if (parseNum(item.selfUseLiters) > 0) selfUseItems.push({ tankKey: item.tankKey, liters: item.selfUseLiters });
            if (parseNum(item.discountBaht) > 0) discountItems.push({ tankKey: item.tankKey, amount: item.discountBaht });
        });
        taxEntryFormData = { selfUseItems, discountItems };
    } else {
        taxEntryFormData = empty;
    }
}

// ===== DELIVERY DOCS FORM (in tax reports page, for Report B) =====
function loadDeliveryDocsForReport() {
    const { stationId, date } = taxReportState;
    if (!stationId || !date) { deliveryDocsFormData = []; return; }
    const entry = DB.getTaxEntry(stationId, date);
    deliveryDocsFormData = entry?.deliveryDocs || [];
}

function renderDeliveryDocsForm() {
    const container = document.getElementById('deliveryDocsFormContainer');
    if (!container) return;
    const { stationId, date } = taxReportState;
    if (taxReportState.type !== 'B' || !stationId) { container.innerHTML = ''; return; }
    const station = REF.stations.find(s => s.id === stationId);
    const docs = deliveryDocsFormData;

    let html = `<div class="card" style="margin-top:12px">
        <div class="card-header">
            <h3>ใบจ่ายน้ำมันหรือใบกำกับขนส่งน้ำมัน</h3>
            <button class="btn btn-primary btn-sm" onclick="saveDeliveryDocs()">💾 บันทึก</button>
        </div>
        <div style="font-size:12px;color:var(--gray-500);margin-bottom:8px">สถานี: ${station?.name || stationId} | วันที่: ${formatDateThai(date)}</div>`;

    if (docs.length === 0) {
        html += `<p style="text-align:center;color:var(--gray-400);padding:16px;">ยังไม่มีรายการ</p>`;
    }

    docs.forEach((doc, idx) => {
        html += `<div style="border:1px solid var(--gray-200);border-radius:var(--radius);padding:12px;margin-bottom:8px;position:relative">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                <strong style="font-size:13px;color:var(--gray-700)">ลำดับที่ ${idx + 1}</strong>
                <button class="btn-delete-row" onclick="removeDeliveryDoc(${idx})" title="ลบ">&#10005;</button>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                <div>
                    <label style="font-size:12px;color:var(--gray-600)">เลขที่</label>
                    <input type="text" class="compact-input" value="${doc.docNo || ''}" placeholder="เลขที่เอกสาร"
                        onchange="updateDeliveryDoc(${idx},'docNo',this.value)" style="width:100%">
                </div>
                <div>
                    <label style="font-size:12px;color:var(--gray-600)">วันที่</label>
                    <input type="date" class="compact-input" value="${doc.docDate || ''}"
                        onchange="updateDeliveryDoc(${idx},'docDate',this.value)" style="width:100%">
                </div>
                <div style="grid-column:1/-1">
                    <label style="font-size:12px;color:var(--gray-600)">ผู้ค่าส่งน้ำมันราย</label>
                    <input type="text" class="compact-input" value="${doc.supplier || ''}" placeholder="ชื่อผู้ส่งน้ำมัน"
                        onchange="updateDeliveryDoc(${idx},'supplier',this.value)" style="width:100%">
                </div>
                <div style="grid-column:1/-1">
                    <label style="font-size:12px;color:var(--gray-600)">ผู้จ่ายน้ำมัน</label>
                    <input type="text" class="compact-input" value="${doc.distributor || ''}" placeholder="ชื่อผู้จ่ายน้ำมัน"
                        onchange="updateDeliveryDoc(${idx},'distributor',this.value)" style="width:100%">
                </div>
            </div>
        </div>`;
    });

    html += `<div style="text-align:center;margin-top:8px;padding-top:8px;border-top:1px solid var(--gray-200)">
            <button class="btn btn-outline btn-sm" onclick="addDeliveryDoc()" ${docs.length >= 6 ? 'disabled' : ''}>+ เพิ่มรายการ${docs.length >= 6 ? ' (สูงสุด 6)' : ''}</button>
        </div>
    </div>`;
    container.innerHTML = html;
}

function addDeliveryDoc() {
    if (deliveryDocsFormData.length >= 6) return;
    deliveryDocsFormData.push({ docNo: '', docDate: '', supplier: '', distributor: '' });
    renderDeliveryDocsForm();
}

function removeDeliveryDoc(index) {
    deliveryDocsFormData.splice(index, 1);
    renderDeliveryDocsForm();
}

function updateDeliveryDoc(index, field, value) {
    if (!deliveryDocsFormData[index]) return;
    deliveryDocsFormData[index][field] = value;
}

function saveDeliveryDocs() {
    const { stationId, date } = taxReportState;
    if (!stationId || !date) { showToast('กรุณาเลือกสถานีและวันที่', 'error'); return; }
    const validDocs = deliveryDocsFormData.filter(d => d.docNo || d.docDate || d.supplier || d.distributor);
    const entry = DB.getTaxEntry(stationId, date) || { stationId, date };
    entry.deliveryDocs = validDocs;
    entry.updatedAt = new Date().toISOString();
    DB.saveTaxEntry(entry);
    showToast('บันทึกใบจ่ายน้ำมันสำเร็จ');
}

function renderTaxEntryForm() {
    const container = document.getElementById('taxEntryFormContainer');
    if (!container) return;
    const { stationId, date } = taxReportState;
    if (taxReportState.type !== 'A' || !stationId) { container.innerHTML = ''; return; }
    const _taxRecord = date ? DB.getDailyRecord(stationId, date) : null;
    const prices = hasFuelPrices(_taxRecord && _taxRecord.fuelPrices) ? _taxRecord.fuelPrices : DB.getFuelPrices();
    const station = REF.stations.find(s => s.id === stationId);
    const stationTanks = REF.tanks.filter(t => t.stationId === stationId);

    // Helper: render tank dropdown options
    const tankOptions = (selectedKey) => stationTanks.map(t => {
        const tLabel = t.label + ' (' + (REF.fuelTypeLabels[t.fuelType] || t.fuelType) + ')';
        return `<option value="${t.key}" ${t.key === selectedKey ? 'selected' : ''}>${tLabel}</option>`;
    }).join('');

    // === Section 1: น้ำมันใช้เอง ===
    const selfUseItems = taxEntryFormData.selfUseItems || [];
    let totalSelfUseBaht = 0;

    // Check if data was auto-populated from daily entry
    const _dailyRec = DB.getDailyRecord(stationId, date);
    const _hasInternalUsage = _dailyRec && _dailyRec.internalUsage && _dailyRec.internalUsage.filter(i => i.tankKey && parseNum(i.liters) > 0).length > 0;
    const _hasSavedTaxEntry = !!DB.getTaxEntry(stationId, date);
    const _autoPopulatedNote = (_hasInternalUsage && !_hasSavedTaxEntry)
        ? '<div style="font-size:11px;color:var(--primary);margin:4px 0 8px;padding:6px 10px;background:var(--primary-light, #eef2ff);border-radius:6px">ℹ️ ดึงข้อมูลอัตโนมัติจากรายการ "ใช้ภายใน" ของบันทึกประจำวัน — สามารถแก้ไข/เพิ่มเติมได้ แล้วกดบันทึก</div>'
        : '';

    let html = `<div class="card" style="margin-top:12px">
        <div class="card-header">
            <h3>บันทึกข้อมูลภาษี</h3>
            <button class="btn btn-primary btn-sm" onclick="saveTaxEntry()">💾 บันทึกข้อมูลภาษี</button>
        </div>
        <div style="font-size:12px;color:var(--gray-500);margin-bottom:8px">สถานี: ${station?.name || stationId} | วันที่: ${formatDateThai(date)}</div>

        <h4 style="margin:12px 0 4px;font-size:14px;color:var(--gray-700)">น้ำมันใช้เอง</h4>
        ${_autoPopulatedNote}
        <table class="tax-entry-table">
            <thead><tr>
                <th>ถัง</th>
                <th>ลิตร</th>
                <th>บาท</th>
                <th style="width:40px"></th>
            </tr></thead><tbody>`;

    if (selfUseItems.length === 0) {
        html += `<tr><td colspan="4" style="text-align:center;color:var(--gray-400);padding:12px;">
            ยังไม่มีรายการ</td></tr>`;
    }
    selfUseItems.forEach((item, idx) => {
        const tank = stationTanks.find(t => t.key === item.tankKey);
        const ft = tank ? tank.fuelType : '';
        const price = ft ? parseNum(prices[ft]) : 0;
        const liters = parseNum(item.liters);
        const baht = liters * price;
        totalSelfUseBaht += baht;
        html += `<tr>
            <td><select class="compact-input" onchange="updateTaxEntryItem('selfUseItems',${idx},'tankKey',this.value)">
                <option value="">-- เลือกถัง --</option>${tankOptions(item.tankKey)}
            </select></td>
            <td><input type="number" step="0.01" class="compact-input" value="${item.liters || ''}" placeholder="ลิตร"
                onchange="updateTaxEntryItem('selfUseItems',${idx},'liters',this.value)"></td>
            <td class="tax-entry-auto-calc">${liters > 0 && price > 0 ? fmt(baht) : '-'}</td>
            <td><button class="btn-delete-row" onclick="removeTaxEntryRow('selfUseItems',${idx})" title="ลบ">&#10005;</button></td>
        </tr>`;
    });

    html += `</tbody><tfoot><tr class="tax-entry-total">
            <td><strong>รวม</strong></td><td></td>
            <td><strong>${totalSelfUseBaht > 0 ? fmt(totalSelfUseBaht) + ' บาท' : '-'}</strong></td><td></td>
        </tr></tfoot></table>
        <div style="text-align:right;margin-top:6px">
            <button class="btn btn-outline btn-sm" onclick="addTaxEntryRow('selfUseItems')">+ เพิ่มรายการ</button>
        </div>

        <hr style="margin:16px 0;border:0;border-top:1px dashed var(--gray-300)">`;

    // === Section 2: ส่วนลด ===
    const discountItems = taxEntryFormData.discountItems || [];
    let totalDiscount = 0;

    html += `<h4 style="margin:0 0 4px;font-size:14px;color:var(--gray-700)">ส่วนลด</h4>
        <table class="tax-entry-table">
            <thead><tr>
                <th>ถัง</th>
                <th>จำนวนเงิน (บาท)</th>
                <th style="width:40px"></th>
            </tr></thead><tbody>`;

    if (discountItems.length === 0) {
        html += `<tr><td colspan="3" style="text-align:center;color:var(--gray-400);padding:12px;">
            ยังไม่มีรายการ</td></tr>`;
    }
    discountItems.forEach((item, idx) => {
        const disc = parseNum(item.amount);
        totalDiscount += disc;
        html += `<tr>
            <td><select class="compact-input" onchange="updateTaxEntryItem('discountItems',${idx},'tankKey',this.value)">
                <option value="">-- เลือกถัง --</option>${tankOptions(item.tankKey)}
            </select></td>
            <td><input type="number" step="0.01" class="compact-input" value="${item.amount || ''}" placeholder="บาท"
                onchange="updateTaxEntryItem('discountItems',${idx},'amount',this.value)"></td>
            <td><button class="btn-delete-row" onclick="removeTaxEntryRow('discountItems',${idx})" title="ลบ">&#10005;</button></td>
        </tr>`;
    });

    html += `</tbody><tfoot><tr class="tax-entry-total">
            <td><strong>รวม</strong></td>
            <td><strong>${totalDiscount > 0 ? fmt(totalDiscount) + ' บาท' : '-'}</strong></td><td></td>
        </tr></tfoot></table>
        <div style="text-align:right;margin-top:6px">
            <button class="btn btn-outline btn-sm" onclick="addTaxEntryRow('discountItems')">+ เพิ่มรายการ</button>
        </div>
    </div>`;
    container.innerHTML = html;
}

function addTaxEntryRow(listName) {
    const defaultItem = listName === 'selfUseItems' ? { tankKey: '', liters: '' } : { tankKey: '', amount: '' };
    taxEntryFormData[listName].push(defaultItem);
    renderTaxEntryForm();
}

function removeTaxEntryRow(listName, index) {
    taxEntryFormData[listName].splice(index, 1);
    renderTaxEntryForm();
}

function updateTaxEntryItem(listName, index, field, value) {
    if (!taxEntryFormData[listName] || !taxEntryFormData[listName][index]) return;
    taxEntryFormData[listName][index][field] = value;
    renderTaxEntryForm();
}

function saveTaxEntry() {
    const { stationId, date } = taxReportState;
    if (!stationId || !date) { showToast('กรุณาเลือกสถานีและวันที่', 'error'); return; }
    const selfUseItems = (taxEntryFormData.selfUseItems || []).filter(i => i.tankKey && parseNum(i.liters) > 0);
    const discountItems = (taxEntryFormData.discountItems || []).filter(i => i.tankKey && parseNum(i.amount) > 0);
    DB.saveTaxEntry({
        stationId, date,
        selfUseItems,
        discountItems,
        updatedAt: new Date().toISOString(),
    });
    showToast('บันทึกข้อมูลภาษีสำเร็จ');
}

// Helper: get fuel types for a station from its tanks
function getStationFuelTypes(stationId) {
    const tanks = REF.tanks.filter(t => t.stationId === stationId);
    const types = [];
    tanks.forEach(t => { if (!types.includes(t.fuelType)) types.push(t.fuelType); });
    return types;
}

// Helper: get total liters sold per fuel type from a record
function getMeterLitersByFuelType(record, stationId) {
    const result = {};
    if (!record || !record.meterReadings) return result;
    const tanks = REF.tanks.filter(t => t.stationId === stationId);
    tanks.forEach(tank => {
        const meters = REF.meters.filter(m => m.tankKey === tank.key);
        let tankLiters = 0;
        meters.forEach(m => {
            const r = record.meterReadings[m.id];
            if (r) tankLiters += Math.max(0, parseNum(r.end) - parseNum(r.start));
        });
        if (!result[tank.fuelType]) result[tank.fuelType] = 0;
        result[tank.fuelType] += tankLiters;
    });
    return result;
}

// Helper: get meter readings grouped by fuel type for ส่วน ก
function getMeterDetailsByFuelType(record, stationId) {
    const result = {};
    if (!record || !record.meterReadings) return result;
    const tanks = REF.tanks.filter(t => t.stationId === stationId);
    tanks.forEach(tank => {
        if (!result[tank.fuelType]) result[tank.fuelType] = [];
        const meters = REF.meters.filter(m => m.tankKey === tank.key);
        meters.forEach(m => {
            const r = record.meterReadings[m.id];
            if (r) {
                const start = parseNum(r.start);
                const end = parseNum(r.end);
                result[tank.fuelType].push({ meterId: m.id, label: m.label, start, end, liters: Math.max(0, end - start) });
            }
        });
    });
    return result;
}

// Helper: get stock data per fuel type
function getStockByFuelType(record, stationId) {
    const result = {};
    if (!record || !record.stockEntries) return result;
    const tanks = REF.tanks.filter(t => t.stationId === stationId);
    tanks.forEach(tank => {
        const s = record.stockEntries[tank.key];
        if (!result[tank.fuelType]) result[tank.fuelType] = { openingStock: 0, fuelAdded: 0, actualDip: 0 };
        if (s) {
            result[tank.fuelType].openingStock += parseNum(s.openingStock);
            result[tank.fuelType].fuelAdded += parseNum(s.fuelAdded);
            result[tank.fuelType].actualDip += parseNum(s.actualDip);
        }
    });
    return result;
}

// Helper: Thai date format
function fmtThaiDate(dateStr) {
    const d = new Date(dateStr);
    const months = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear() + 543}`;
}

function fmtThaiMonth(yearMonth) {
    const [y, m] = yearMonth.split('-');
    const months = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
    return `${months[parseInt(m)-1]} ${parseInt(y) + 543}`;
}

function reportHeader(section, dateLabel, stationId) {
    const station = REF.stations.find(s => s.id === stationId);
    const bName = station?.businessName || BUSINESS_INFO.name;
    const taxId = station?.taxId || BUSINESS_INFO.taxId;
    const addr = station?.address || BUSINESS_INFO.defaultAddress;
    return `
        <div class="tax-report-header">
            <h2>รายงานแสดงรายละเอียดการขายน้ำมันเชื้อเพลิงแต่ละชนิด</h2>
            <div class="tax-report-meta">
                <span class="tax-report-section-label">${section}</span>
                <p>เลขประจำตัวผู้เสียภาษีอากร: ${taxId}</p>
                <p>ณ ${dateLabel}</p>
                <p>ชื่อผู้ประกอบการ: ${bName}</p>
                <p>ชื่อสถานบริการน้ำมัน: ${bName}</p>
                <p>ที่อยู่: ${addr}</p>
            </div>
        </div>`;
}

// ===== REPORT A: มิเตอร์หัวจ่าย (รายวัน) =====
// Short fuel type labels for report columns
const REPORT_FUEL_LABELS = {
    'Diesel': 'B7', 'Gasohol 95': 'แก๊สโซฮอล์ 95', 'Gasohol 91': 'แก๊สโซฮอล์ 91',
    'Benzyne 95': 'เบนซิน 95', 'E 20': 'แก๊สโซฮอล์ E 20', 'Diesel premium': 'ดีเซลพรีเมี่ยม',
    'Gasohol 95 P': 'แก๊สโซฮอล์ 95 P', 'LPG': 'แอลพีจี',
};
const PRICE_SHORT_LABELS = {
    'Diesel': 'B7', 'Gasohol 95': 'GH95', 'Gasohol 91': 'GH91', 'E 20': 'E20',
    'Diesel premium': 'ดีเซลพรีเมี่ยม', 'Gasohol 95 P': 'GH95P', 'Benzyne 95': 'เบนซิน 95', 'LPG': 'LPG',
};

function generateReportA(stationId, date, printOpts) {
    const record = DB.getDailyRecord(stationId, date);
    const prices = hasFuelPrices(record && record.fuelPrices) ? record.fuelPrices : DB.getFuelPrices();
    const station = REF.stations.find(s => s.id === stationId);

    // Group by TANK (not fuel type) — each tank is a separate column group
    const tanks = REF.tanks.filter(t => t.stationId === stationId);
    const allTankGroups = tanks.map(tank => {
        const meters = REF.meters.filter(m => m.tankKey === tank.key);
        if (meters.length === 0) return null;
        return { tank, meters };
    }).filter(Boolean);

    // For print: split tank groups into pages
    let tankGroups = allTankGroups;
    if (printOpts) {
        const half = Math.ceil(allTankGroups.length / 2);
        tankGroups = printOpts.page === 1
            ? allTankGroups.slice(0, half)
            : allTankGroups.slice(half);
    }

    // Count tanks per fuel type for numbering (B7(1), B7(2), etc.)
    const fuelTypeTankKeys = {};
    tanks.forEach(t => {
        if (!fuelTypeTankKeys[t.fuelType]) fuelTypeTankKeys[t.fuelType] = [];
        fuelTypeTankKeys[t.fuelType].push(t.key);
    });

    function getTankColumnLabel(tank) {
        const base = REPORT_FUEL_LABELS[tank.fuelType] || tank.fuelType;
        const sameFuelKeys = fuelTypeTankKeys[tank.fuelType] || [];
        if (sameFuelKeys.length > 1) {
            return `${base} (${sameFuelKeys.indexOf(tank.key) + 1})`;
        }
        return base;
    }

    // === Header ===
    const d = new Date(date);
    const thaiMonthsShort = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
    const thaiYear = d.getFullYear() + 543;
    const bName = station?.businessName || BUSINESS_INFO.name;
    const taxId = station?.taxId || BUSINESS_INFO.taxId;
    const addr = station?.address || BUSINESS_INFO.defaultAddress;

    let html = `<div class="tax-report">`;
    html += `<div class="tax-report-header">
        <h2>รายงานแสดงรายละเอียดการขายน้ำมันเชื้อเพลิงแต่ละชนิด</h2>
        <div class="tax-report-meta">
            <div class="tax-report-meta-toprow">
                <span>เลขประจำตัวผู้เสียภาษีอากร ${taxId}</span>
                <span class="tax-report-section-label">ส่วน ก</span>
            </div>
            <p>ณ วันที่ ${d.getDate()} เดือน ${thaiMonthsShort[d.getMonth()]} พ.ศ. ${thaiYear}</p>
            <p>ชื่อผู้ประกอบการ ${bName}</p>
            <p>ชื่อสถานบริการน้ำมัน ${bName}</p>
            <p>ที่อยู่ ${addr}</p>
        </div>
    </div>`;

    // === Data Table ===
    const maxRows = Math.max(10, ...tankGroups.map(tg => tg.meters.length));

    html += `<table class="tax-report-table">`;
    // Colgroup to fix column widths
    html += `<colgroup><col class="col-no-width">`;
    tankGroups.forEach(() => {
        html += `<col class="col-meter"><col class="col-meter"><col class="col-liters"><col class="col-baht">`;
    });
    html += `</colgroup>`;
    html += `<thead>`;
    // Header row 1: tank group labels
    html += `<tr><th rowspan="2" class="col-no">หัวจ่าย<br><small>เลขที่</small></th>`;
    tankGroups.forEach(tg => {
        html += `<th colspan="4">${getTankColumnLabel(tg.tank)}</th>`;
    });
    html += `</tr>`;
    // Header row 2: sub-columns
    html += `<tr>`;
    tankGroups.forEach(() => {
        html += `<th>มิเตอร์<br>เริ่มต้น</th><th>มิเตอร์<br>สุดท้าย</th><th>ปริมาณขาย<br>(ลิตร)</th><th>บาท</th>`;
    });
    html += `</tr></thead><tbody>`;

    // Data rows (nozzles per tank)
    for (let i = 0; i < maxRows; i++) {
        html += `<tr><td>${i + 1}</td>`;
        tankGroups.forEach(tg => {
            if (i < tg.meters.length) {
                const m = tg.meters[i];
                const r = record?.meterReadings?.[m.id];
                const start = r ? parseNum(r.start) : 0;
                const end = r ? parseNum(r.end) : 0;
                const liters = Math.max(0, end - start);
                const price = prices[tg.tank.fuelType] || 0;
                const amt = liters * price;
                const hasData = r && (start > 0 || end > 0);
                html += `<td class="number">${hasData ? fmtDec(start, 1) : '-'}</td>
                         <td class="number">${hasData ? fmtDec(end, 1) : '-'}</td>
                         <td class="number">${hasData ? fmtDec(liters, 2) : '-'}</td>
                         <td class="number">${hasData ? fmtDec(amt, 2) : '-'}</td>`;
            } else {
                html += `<td>-</td><td>-</td><td>-</td><td>-</td>`;
            }
        });
        html += `</tr>`;
    }
    // === Calculate totals per tank group ===
    const tankTotals = {};
    tankGroups.forEach(tg => {
        let totalLiters = 0;
        tg.meters.forEach(m => {
            const r = record?.meterReadings?.[m.id];
            if (r) totalLiters += Math.max(0, parseNum(r.end) - parseNum(r.start));
        });
        const price = prices[tg.tank.fuelType] || 0;
        tankTotals[tg.tank.key] = { liters: totalLiters, amount: totalLiters * price };
    });

    // === Summary Rows ===

    // Helper: render a summary row where label spans col-no + first 2 sub-cols of first tank
    function summaryRow(label, cssClass, getValues) {
        let row = `<tr${cssClass ? ` class="${cssClass}"` : ''}>`;
        tankGroups.forEach((tg, idx) => {
            const vals = getValues(tg);
            if (idx === 0) {
                // Label spans: col-no(1) + มิเตอร์เริ่มต้น(1) + มิเตอร์สุดท้าย(1) = 3
                row += `<td colspan="3" class="summary-label">${label}</td>`;
                row += `<td class="number">${vals.liters}</td><td class="number">${vals.amount}</td>`;
            } else {
                row += `<td colspan="2"></td><td class="number">${vals.liters}</td><td class="number">${vals.amount}</td>`;
            }
        });
        row += `</tr>`;
        return row;
    }

    // Helper: render a summary row where only baht column has value (for VAT rows)
    function summaryRowBahtOnly(label, cssClass, getBaht) {
        let row = `<tr${cssClass ? ` class="${cssClass}"` : ''}>`;
        tankGroups.forEach((tg, idx) => {
            const baht = getBaht(tg);
            if (idx === 0) {
                row += `<td colspan="4" class="summary-label">${label}</td>`;
                row += `<td class="number">${baht}</td>`;
            } else {
                row += `<td colspan="3"></td><td class="number">${baht}</td>`;
            }
        });
        row += `</tr>`;
        return row;
    }

    // === Prepare self-use fuel & trade discount per tank (from TAX ENTRY) ===
    const taxEntry = DB.getTaxEntry(stationId, date);
    const selfUseItems = taxEntry?.selfUseItems || [];
    const discountItems = taxEntry?.discountItems || [];

    // Direct mapping: each item targets a specific tank (no proportional distribution)
    const selfUsePerTank = {};
    const tradeDiscountPerTank = {};
    allTankGroups.forEach(tg => {
        const suItem = selfUseItems.find(i => i.tankKey === tg.tank.key);
        const liters = parseNum(suItem?.liters);
        const price = prices[tg.tank.fuelType] || 0;
        selfUsePerTank[tg.tank.key] = { liters, amount: liters * price };
        const discItem = discountItems.find(i => i.tankKey === tg.tank.key);
        tradeDiscountPerTank[tg.tank.key] = parseNum(discItem?.amount);
    });

    // Row 1: รวม
    html += summaryRow('1. รวม', 'tax-summary-row', tg => {
        const t = tankTotals[tg.tank.key];
        return { liters: fmtDec(t.liters, 2), amount: fmtDec(t.amount, 2) };
    });

    // Row 2: หักยอดน้ำมันทดสอบ
    html += summaryRow('2. หักยอดน้ำมันทดสอบ', '', () => ({ liters: '-', amount: '-' }));

    // Sub-row: หักอื่น ๆ น้ำมันใช้ไป (self-use fuel)
    html += summaryRow('&nbsp;&nbsp;&nbsp;&nbsp;หักอื่น ๆ น้ำมันใช้ไป', '', tg => {
        const su = selfUsePerTank[tg.tank.key] || { liters: 0, amount: 0 };
        return { liters: su.liters > 0 ? fmtDec(su.liters, 2) : '-', amount: su.amount > 0 ? fmtDec(su.amount, 2) : '-' };
    });

    // Row 3: รวมยอดขายประจำวัน = Row 1 - self-use
    html += summaryRow('3. รวมยอดขายประจำวัน', 'tax-summary-row', tg => {
        const t = tankTotals[tg.tank.key];
        const su = selfUsePerTank[tg.tank.key] || { liters: 0, amount: 0 };
        return { liters: fmtDec(t.liters - su.liters, 2), amount: fmtDec(t.amount - su.amount, 2) };
    });

    // Row 4: หัก ส่วนลดการค้าหน้าลาน
    html += summaryRowBahtOnly('4. หัก ส่วนลดการค้าหน้าลาน', '', tg => {
        const td = tradeDiscountPerTank[tg.tank.key] || 0;
        return td > 0 ? fmtDec(td, 2) : '';
    });

    // Row 5: ยอดขายสุทธิ = Row 3 - Row 4
    html += summaryRow('5. ยอดขายสุทธิ', 'tax-summary-row', tg => {
        const t = tankTotals[tg.tank.key];
        const su = selfUsePerTank[tg.tank.key] || { liters: 0, amount: 0 };
        const td = tradeDiscountPerTank[tg.tank.key] || 0;
        return { liters: fmtDec(t.liters - su.liters, 2), amount: fmtDec((t.amount - su.amount) - td, 2) };
    });

    // Row 6: ภาษีขาย (5×7/107) — based on net sales
    html += summaryRowBahtOnly('6. ภาษีขาย (5×7/107)', '', tg => {
        const t = tankTotals[tg.tank.key];
        const su = selfUsePerTank[tg.tank.key] || { liters: 0, amount: 0 };
        const td = tradeDiscountPerTank[tg.tank.key] || 0;
        const netSales = (t.amount - su.amount) - td;
        const vat = Math.round((netSales * 7 / 107) * 100) / 100;
        return fmtDec(vat, 2);
    });

    // Row 7: ภาษีซื้อของน้ำมันเชื้อเพลิง
    html += summaryRowBahtOnly('7. ภาษีซื้อของน้ำมันเชื้อเพลิง', '', () => '');

    html += `</tbody></table>`;

    // === VAT Totals (use ALL tank groups for grand total, based on NET sales) ===
    let grandTotalSales = 0;
    let grandTotalVat = 0;
    allTankGroups.forEach(tg => {
        const key = tg.tank.key;
        const tt = tankTotals[key] || { amount: 0 };
        const su = selfUsePerTank[key] || { amount: 0 };
        const td = tradeDiscountPerTank[key] || 0;
        const netSales = (tt.amount - su.amount) - td;
        grandTotalSales += netSales;
        grandTotalVat += Math.round((netSales * 7 / 107) * 100) / 100;
    });
    const grandTotalExVat = Math.round((grandTotalSales - grandTotalVat) * 100) / 100;

    // Show VAT totals + bottom section only on page 2 or normal view (not page 1)
    const showBottom = !printOpts || printOpts.page === 2;
    if (showBottom) {
    html += `<div class="tax-report-vat-totals">
        <div class="vat-detail-row"><span>รวมยอดขายจากน้ำมันเชื้อเพลิงทั้งสิ้น</span><strong>${fmtDec(grandTotalSales, 2)}</strong><span>บาท</span></div>
        <div class="vat-detail-row"><span>ภาษีมูลค่าเพิ่ม (7/107)</span><strong>${fmtDec(grandTotalVat, 2)}</strong><span>บาท</span></div>
        <div class="vat-detail-row"><span>ยอดขายหลังหักภาษีมูลค่าเพิ่ม</span><strong>${fmtDec(grandTotalExVat, 2)}</strong><span>บาท</span></div>
        <div class="vat-detail-row vat-input"><span>รวมภาษีซื้อจากน้ำมันเชื้อเพลิงทั้งสิ้น</span><strong>-</strong><span>บาท</span></div>
    </div>`;
    }

    // === Invoice Section + Fuel Prices (only page 2 or normal) ===
    if (showBottom) {
    const inv = record?.taxInvoices || { abbreviated: [], full: [] };

    html += `<div class="tax-report-bottom-section">`;
    html += `<div class="tax-report-invoices">`;

    // Abbreviated invoices (มาตรา 86/6) — 2 fixed rows
    html += `<p class="invoice-section-title">ใบกำกับภาษีอย่างย่อ ตามมาตรา 86/6 แห่งประมวลรัษฎากร (จากการขายน้ำมันเชื้อเพลิงผ่านมิเตอร์หัวจ่าย)</p>`;
    html += `<table class="invoice-detail-table">`;
    for (let r = 0; r < 2; r++) {
        const iv = inv.abbreviated[r];
        const bookNo = iv?.bookNo || '';
        const invoiceNo = iv?.invoiceNo || '';
        const copies = iv?.copies || '';
        const amount = iv ? parseNum(iv.amount) : 0;
        const vat = amount > 0 ? Math.round((amount / 1.07 * 0.07) * 100) / 100 : 0;
        html += `<tr>
            <td>เล่มที่</td><td class="inv-val">${bookNo}</td>
            <td>เลขที่</td><td class="inv-val">${invoiceNo}</td>
            <td>จำนวน</td><td class="inv-val">${copies}</td>
            <td>ฉบับ</td>
            <td>จำนวน</td><td class="inv-val">${amount > 0 ? fmtDec(amount, 2) : ''}</td>
            <td>บาท</td>
            <td>ภาษีมูลค่าเพิ่ม</td><td class="inv-val">${fmtDec(vat, 2)}</td><td>บาท</td>
        </tr>`;
    }
    html += `</table>`;

    // Full invoices (มาตรา 86/4) — 4 fixed rows
    html += `<p class="invoice-section-title">ใบกำกับภาษีเต็มรูปแบบ ตามมาตรา 86/4 แห่งประมวลรัษฎากร (จากการขายน้ำมันเชื้อเพลิงผ่านมิเตอร์หัวจ่าย)</p>`;
    html += `<table class="invoice-detail-table">`;
    for (let r = 0; r < 4; r++) {
        const iv = inv.full[r];
        const bookNo = iv?.bookNo || '';
        const invoiceNo = iv?.invoiceNo || '';
        const copies = iv?.copies || '';
        const amount = iv ? parseNum(iv.amount) : 0;
        const vat = amount > 0 ? Math.round((amount / 1.07 * 0.07) * 100) / 100 : 0;
        html += `<tr>
            <td>เล่มที่</td><td class="inv-val">${bookNo}</td>
            <td>เลขที่</td><td class="inv-val">${invoiceNo}</td>
            <td>จำนวน</td><td class="inv-val">${copies}</td>
            <td>ฉบับ</td>
            <td>จำนวน</td><td class="inv-val">${amount > 0 ? fmtDec(amount, 2) : ''}</td>
            <td>บาท</td>
            <td>ภาษีมูลค่าเพิ่ม</td><td class="inv-val">${fmtDec(vat, 2)}</td><td>บาท</td>
        </tr>`;
    }
    html += `</table>`;
    html += `</div>`;

    // Fuel prices box (right side)
    const fuelTypes = getStationFuelTypes(stationId);
    html += `<div class="tax-report-prices"><h4>ราคาน้ำมันวันนี้</h4>`;
    fuelTypes.forEach(ft => {
        const label = PRICE_SHORT_LABELS[ft] || ft;
        html += `<p><span class="price-label">${label}</span> <span class="price-value">${prices[ft] ? fmtDec(prices[ft], 2) : '-'}</span> บาท</p>`;
    });
    html += `</div>`;

    html += `</div></div>`;
    } // end showBottom

    html += `</div>`;
    return html;
}

// ===== REPORT A MONTHLY: สรุปรายเดือน =====
function generateReportAMonthly(stationId, yearMonth, printOpts) {
    let prices = DB.getFuelPrices(); // fallback, will be overridden by last record's prices
    const station = REF.stations.find(s => s.id === stationId);
    const [year, month] = yearMonth.split('-').map(Number);
    const daysInMonth = new Date(year, month, 0).getDate();

    // Group by TANK — same as daily Report A
    const tanks = REF.tanks.filter(t => t.stationId === stationId);
    const allTankGroups = tanks.map(tank => {
        const meters = REF.meters.filter(m => m.tankKey === tank.key);
        if (meters.length === 0) return null;
        return { tank, meters };
    }).filter(Boolean);

    let tankGroups = allTankGroups;
    if (printOpts) {
        const half = Math.ceil(allTankGroups.length / 2);
        tankGroups = printOpts.page === 1 ? allTankGroups.slice(0, half) : allTankGroups.slice(half);
    }

    const fuelTypeTankKeys = {};
    tanks.forEach(t => {
        if (!fuelTypeTankKeys[t.fuelType]) fuelTypeTankKeys[t.fuelType] = [];
        fuelTypeTankKeys[t.fuelType].push(t.key);
    });
    function getTankColumnLabel(tank) {
        const base = REPORT_FUEL_LABELS[tank.fuelType] || tank.fuelType;
        const sameFuelKeys = fuelTypeTankKeys[tank.fuelType] || [];
        return sameFuelKeys.length > 1 ? `${base} (${sameFuelKeys.indexOf(tank.key) + 1})` : base;
    }

    // === Aggregate monthly data ===
    // Per meter: sum liters and amounts across all days
    const meterTotals = {};   // meterId → totalLiters
    const meterAmounts = {};  // meterId → totalAmount (liters × per-record price)
    let recordCount = 0;

    // Per tank: aggregate self-use and discount from tax entries
    const selfUsePerTank = {};
    const tradeDiscountPerTank = {};
    allTankGroups.forEach(tg => {
        selfUsePerTank[tg.tank.key] = { liters: 0, amount: 0 };
        tradeDiscountPerTank[tg.tank.key] = 0;
    });

    for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const record = DB.getDailyRecord(stationId, dateStr);
        const dayPrices = hasFuelPrices(record && record.fuelPrices) ? record.fuelPrices : prices;
        if (record) {
            recordCount++;
            // Use latest record's prices as the display price
            if (hasFuelPrices(record.fuelPrices)) prices = record.fuelPrices;
            // Sum meter liters and amounts
            allTankGroups.forEach(tg => {
                tg.meters.forEach(m => {
                    const r = record.meterReadings?.[m.id];
                    if (r) {
                        const liters = Math.max(0, parseNum(r.end) - parseNum(r.start));
                        if (!meterTotals[m.id]) meterTotals[m.id] = 0;
                        if (!meterAmounts[m.id]) meterAmounts[m.id] = 0;
                        meterTotals[m.id] += liters;
                        meterAmounts[m.id] += liters * parseNum(dayPrices[tg.tank.fuelType]);
                    }
                });
            });
        }
        // Sum tax entry items
        const taxEntry = DB.getTaxEntry(stationId, dateStr);
        if (taxEntry) {
            (taxEntry.selfUseItems || []).forEach(item => {
                if (selfUsePerTank[item.tankKey]) {
                    const liters = parseNum(item.liters);
                    const price = dayPrices[tanks.find(t => t.key === item.tankKey)?.fuelType] || 0;
                    selfUsePerTank[item.tankKey].liters += liters;
                    selfUsePerTank[item.tankKey].amount += liters * price;
                }
            });
            (taxEntry.discountItems || []).forEach(item => {
                if (tradeDiscountPerTank.hasOwnProperty(item.tankKey)) {
                    tradeDiscountPerTank[item.tankKey] += parseNum(item.amount);
                }
            });
        }
    }

    // === Header ===
    const thaiMonthsFull = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
    const thaiYear = year + 543;
    const bName = station?.businessName || BUSINESS_INFO.name;
    const taxId = station?.taxId || BUSINESS_INFO.taxId;
    const addr = station?.address || BUSINESS_INFO.defaultAddress;

    let html = `<div class="tax-report">`;
    html += `<div class="tax-report-header">
        <h2>รายงานแสดงรายละเอียดการขายน้ำมันเชื้อเพลิงแต่ละชนิด</h2>
        <div class="tax-report-meta">
            <div class="tax-report-meta-toprow">
                <span>เลขประจำตัวผู้เสียภาษีอากร ${taxId}</span>
                <span class="tax-report-section-label">ส่วน ก (สรุปรายเดือน)</span>
            </div>
            <p>สรุปประจำเดือน ${thaiMonthsFull[month - 1]} พ.ศ. ${thaiYear} (${recordCount} วันที่มีข้อมูล)</p>
            <p>ชื่อผู้ประกอบการ ${bName}</p>
            <p>ชื่อสถานบริการน้ำมัน ${bName}</p>
            <p>ที่อยู่ ${addr}</p>
        </div>
    </div>`;

    // === Data Table ===
    const maxRows = Math.max(10, ...tankGroups.map(tg => tg.meters.length));

    html += `<table class="tax-report-table">`;
    html += `<colgroup><col class="col-no-width">`;
    tankGroups.forEach(() => { html += `<col class="col-meter"><col class="col-liters"><col class="col-baht">`; });
    html += `</colgroup>`;
    html += `<thead>`;
    html += `<tr><th rowspan="2" class="col-no">หัวจ่าย<br><small>เลขที่</small></th>`;
    tankGroups.forEach(tg => { html += `<th colspan="3">${getTankColumnLabel(tg.tank)}</th>`; });
    html += `</tr>`;
    html += `<tr>`;
    tankGroups.forEach(() => { html += `<th>รวมลิตร</th><th>ลิตร</th><th>บาท</th>`; });
    html += `</tr></thead><tbody>`;

    // Data rows (nozzles per tank — monthly totals)
    for (let i = 0; i < maxRows; i++) {
        html += `<tr><td>${i + 1}</td>`;
        tankGroups.forEach(tg => {
            if (i < tg.meters.length) {
                const m = tg.meters[i];
                const liters = meterTotals[m.id] || 0;
                const amt = meterAmounts[m.id] || 0;
                const hasData = liters > 0;
                html += `<td class="number">${hasData ? fmtDec(liters, 2) : '-'}</td>
                         <td class="number">${hasData ? fmtDec(liters, 2) : '-'}</td>
                         <td class="number">${hasData ? fmtDec(amt, 2) : '-'}</td>`;
            } else {
                html += `<td>-</td><td>-</td><td>-</td>`;
            }
        });
        html += `</tr>`;
    }

    // === Calculate totals per tank group ===
    const tankTotals = {};
    allTankGroups.forEach(tg => {
        let totalLiters = 0;
        let totalAmount = 0;
        tg.meters.forEach(m => {
            totalLiters += meterTotals[m.id] || 0;
            totalAmount += meterAmounts[m.id] || 0;
        });
        tankTotals[tg.tank.key] = { liters: totalLiters, amount: totalAmount };
    });

    // === Summary Rows ===
    function summaryRow(label, cssClass, getValues) {
        let row = `<tr${cssClass ? ` class="${cssClass}"` : ''}>`;
        tankGroups.forEach((tg, idx) => {
            const vals = getValues(tg);
            if (idx === 0) {
                row += `<td colspan="2" class="summary-label">${label}</td>`;
                row += `<td class="number">${vals.liters}</td><td class="number">${vals.amount}</td>`;
            } else {
                row += `<td></td><td class="number">${vals.liters}</td><td class="number">${vals.amount}</td>`;
            }
        });
        row += `</tr>`;
        return row;
    }

    function summaryRowBahtOnly(label, cssClass, getBaht) {
        let row = `<tr${cssClass ? ` class="${cssClass}"` : ''}>`;
        tankGroups.forEach((tg, idx) => {
            const baht = getBaht(tg);
            if (idx === 0) {
                row += `<td colspan="3" class="summary-label">${label}</td>`;
                row += `<td class="number">${baht}</td>`;
            } else {
                row += `<td colspan="2"></td><td class="number">${baht}</td>`;
            }
        });
        row += `</tr>`;
        return row;
    }

    // Row 1: รวม
    html += summaryRow('1. รวม', 'tax-summary-row', tg => {
        const t = tankTotals[tg.tank.key];
        return { liters: fmtDec(t.liters, 2), amount: fmtDec(t.amount, 2) };
    });

    // Row 2: หักยอดน้ำมันทดสอบ
    html += summaryRow('2. หักยอดน้ำมันทดสอบ', '', () => ({ liters: '-', amount: '-' }));

    // Sub-row: น้ำมันใช้เอง (monthly total)
    html += summaryRow('&nbsp;&nbsp;&nbsp;&nbsp;หักอื่น ๆ น้ำมันใช้ไป', '', tg => {
        const su = selfUsePerTank[tg.tank.key] || { liters: 0, amount: 0 };
        return { liters: su.liters > 0 ? fmtDec(su.liters, 2) : '-', amount: su.amount > 0 ? fmtDec(su.amount, 2) : '-' };
    });

    // Row 3: รวมยอดขายประจำเดือน
    html += summaryRow('3. รวมยอดขายประจำเดือน', 'tax-summary-row', tg => {
        const t = tankTotals[tg.tank.key];
        const su = selfUsePerTank[tg.tank.key] || { liters: 0, amount: 0 };
        return { liters: fmtDec(t.liters - su.liters, 2), amount: fmtDec(t.amount - su.amount, 2) };
    });

    // Row 4: หักส่วนลดการค้า
    html += summaryRowBahtOnly('4. หัก ส่วนลดการค้าหน้าลาน', '', tg => {
        const td = tradeDiscountPerTank[tg.tank.key] || 0;
        return td > 0 ? fmtDec(td, 2) : '';
    });

    // Row 5: ยอดขายสุทธิ
    html += summaryRow('5. ยอดขายสุทธิ', 'tax-summary-row', tg => {
        const t = tankTotals[tg.tank.key];
        const su = selfUsePerTank[tg.tank.key] || { liters: 0, amount: 0 };
        const td = tradeDiscountPerTank[tg.tank.key] || 0;
        return { liters: fmtDec(t.liters - su.liters, 2), amount: fmtDec((t.amount - su.amount) - td, 2) };
    });

    // Row 6: ภาษีขาย (7/107)
    html += summaryRowBahtOnly('6. ภาษีขาย (5×7/107)', '', tg => {
        const t = tankTotals[tg.tank.key];
        const su = selfUsePerTank[tg.tank.key] || { liters: 0, amount: 0 };
        const td = tradeDiscountPerTank[tg.tank.key] || 0;
        const netSales = (t.amount - su.amount) - td;
        return fmtDec(Math.round((netSales * 7 / 107) * 100) / 100, 2);
    });

    // Row 7: ภาษีซื้อ
    html += summaryRowBahtOnly('7. ภาษีซื้อของน้ำมันเชื้อเพลิง', '', () => '');

    html += `</tbody></table>`;

    // === VAT Grand Totals ===
    let grandTotalSales = 0, grandTotalVat = 0;
    allTankGroups.forEach(tg => {
        const tt = tankTotals[tg.tank.key] || { amount: 0 };
        const su = selfUsePerTank[tg.tank.key] || { amount: 0 };
        const td = tradeDiscountPerTank[tg.tank.key] || 0;
        const netSales = (tt.amount - su.amount) - td;
        grandTotalSales += netSales;
        grandTotalVat += Math.round((netSales * 7 / 107) * 100) / 100;
    });
    const grandTotalExVat = Math.round((grandTotalSales - grandTotalVat) * 100) / 100;

    const showBottom = !printOpts || printOpts.page === 2;
    if (showBottom) {
        html += `<div class="tax-report-vat-totals">
            <div class="vat-detail-row"><span>รวมยอดขายจากน้ำมันเชื้อเพลิงทั้งสิ้น (ประจำเดือน)</span><strong>${fmtDec(grandTotalSales, 2)}</strong><span>บาท</span></div>
            <div class="vat-detail-row"><span>ภาษีมูลค่าเพิ่ม (7/107)</span><strong>${fmtDec(grandTotalVat, 2)}</strong><span>บาท</span></div>
            <div class="vat-detail-row"><span>ยอดขายหลังหักภาษีมูลค่าเพิ่ม</span><strong>${fmtDec(grandTotalExVat, 2)}</strong><span>บาท</span></div>
            <div class="vat-detail-row vat-input"><span>รวมภาษีซื้อจากน้ำมันเชื้อเพลิงทั้งสิ้น</span><strong>-</strong><span>บาท</span></div>
        </div>`;

        // Fuel prices box
        const fuelTypes = getStationFuelTypes(stationId);
        html += `<div class="tax-report-bottom-section"><div></div><div class="tax-report-prices"><h4>ราคาน้ำมัน</h4>`;
        fuelTypes.forEach(ft => {
            const label = PRICE_SHORT_LABELS[ft] || ft;
            html += `<p><span class="price-label">${label}</span> <span class="price-value">${prices[ft] ? fmtDec(prices[ft], 2) : '-'}</span> บาท</p>`;
        });
        html += `</div></div>`;
    }

    html += `</div>`;
    return html;
}

// Helper: format decimal
function fmtDec(num, decimals) {
    return parseFloat(num || 0).toLocaleString('th-TH', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

// ===== REPORT B: สต็อกก้นถัง (รายวัน) =====
function generateReportB(stationId, date) {
    const record = DB.getDailyRecord(stationId, date);
    const fuelTypes = getStationFuelTypes(stationId);
    const stock = getStockByFuelType(record, stationId);
    const sold = getMeterLitersByFuelType(record, stationId);

    let html = `<div class="tax-report">`;
    html += reportHeader('ส่วน ข', fmtThaiDate(date), stationId);
    html += `<p style="text-align:right;font-size:12px">หน่วยนับ : ลิตร</p>`;

    const dataCols = fuelTypes.length * 2; // ถังฯ + ลิตร per fuel type
    html += `<table class="tax-report-table report-b-table">
        <colgroup>
            <col style="width:240px">`;
    for (let i = 0; i < dataCols; i++) html += `<col>`;
    html += `</colgroup>
        <thead><tr><th>รายการ</th>`;
    fuelTypes.forEach(ft => {
        html += `<th colspan="2">${REF.fuelTypeLabels[ft] || ft}</th>`;
    });
    html += `</tr><tr><th></th>`;
    fuelTypes.forEach(() => html += `<th>ถังฯ</th><th>ลิตร</th>`);
    html += `</tr></thead><tbody>`;

    // Row 1: ยอดน้ำมันสะสมวัดได้จริงสิ้นงวด
    html += `<tr><td>1. ยอดน้ำมันสะสมในถังวัดได้จริงสิ้นงวด</td>`;
    fuelTypes.forEach(ft => {
        const s = stock[ft] || {};
        html += `<td></td><td class="number">${fmtDec(s.actualDip, 1)}</td>`;
    });
    html += `</tr>`;

    // Row 2: รวมวัดได้จริงสิ้นงวด (same as row 1 for daily)
    html += `<tr class="tax-summary-row"><td>2. รวมยอดน้ำมันวัดได้จริงสิ้นงวด</td>`;
    fuelTypes.forEach(ft => {
        const s = stock[ft] || {};
        html += `<td></td><td class="number">${fmtDec(s.actualDip, 1)}</td>`;
    });
    html += `</tr>`;

    // Row 3: วัดได้จริงต้นงวด
    html += `<tr><td>3. น้ำมันที่วัดได้จริงต้นงวด</td>`;
    fuelTypes.forEach(ft => {
        const s = stock[ft] || {};
        html += `<td></td><td class="number">${fmtDec(s.openingStock, 1)}</td>`;
    });
    html += `</tr>`;

    // Row 4: บวก ยอดน้ำมันรับประจำวัน
    html += `<tr><td>4. บวก ยอดน้ำมันรับประจำวัน</td>`;
    fuelTypes.forEach(ft => {
        const s = stock[ft] || {};
        html += `<td></td><td class="number">${fmtDec(s.fuelAdded, 1)}</td>`;
    });
    html += `</tr>`;

    // Row 5: หัก ยอดน้ำมันขายประจำวัน
    html += `<tr><td>5. หัก ยอดน้ำมันขายประจำวัน</td>`;
    fuelTypes.forEach(ft => {
        html += `<td></td><td class="number">${fmtDec(sold[ft] || 0, 1)}</td>`;
    });
    html += `</tr>`;

    // Row 6: คงเหลือในบัญชี (3+4-5)
    html += `<tr class="tax-summary-row"><td>6. น้ำมันคงเหลือในบัญชี (3+4-5)</td>`;
    const bookRemaining = {};
    fuelTypes.forEach(ft => {
        const s = stock[ft] || {};
        const remaining = s.openingStock + s.fuelAdded - (sold[ft] || 0);
        bookRemaining[ft] = remaining;
        html += `<td></td><td class="number">${fmtDec(remaining, 1)}</td>`;
    });
    html += `</tr>`;

    // Row 7: ผลต่าง (2-6)
    html += `<tr><td>7. ผลต่างน้ำมันปัจจุบัน (2-6)</td>`;
    fuelTypes.forEach(ft => {
        const s = stock[ft] || {};
        const variance = s.actualDip - bookRemaining[ft];
        html += `<td></td><td class="number ${variance >= 0 ? 'variance-positive' : 'variance-negative'}">${fmtDec(variance, 1)}</td>`;
    });
    html += `</tr>`;

    // Row 8: ผลต่างสะสมยกมา
    html += `<tr><td>8. บวก ผลต่างสะสมยกมา</td>`;
    fuelTypes.forEach(() => html += `<td></td><td class="number">0.0</td>`);
    html += `</tr>`;

    // Row 9: ผลต่างสะสมยกไป (7+8)
    html += `<tr class="tax-summary-row"><td>9. ผลต่างสะสมปัจจุบันยกไป (7+8)</td>`;
    fuelTypes.forEach(ft => {
        const s = stock[ft] || {};
        const variance = s.actualDip - bookRemaining[ft];
        html += `<td></td><td class="number">${fmtDec(variance, 1)}</td>`;
    });
    html += `</tr>`;

    html += `</tbody></table>`;

    // Delivery document section
    const taxEntryB = DB.getTaxEntry(stationId, date);
    const deliveryDocs = taxEntryB?.deliveryDocs || [];
    html += `<div class="tax-report-delivery" style="margin-top:16px">
        <p style="font-weight:600;margin-bottom:8px">ใบจ่ายน้ำมันหรือใบกำกับขนส่งน้ำมัน</p>`;
    if (deliveryDocs.length === 0) {
        html += `<p style="color:var(--gray-400);font-size:12px">(ยังไม่มีข้อมูล)</p>`;
    } else {
        deliveryDocs.forEach((doc, idx) => {
            const d = doc.docDate ? new Date(doc.docDate) : null;
            const dayStr = d ? d.getDate() : '___';
            const monthNames = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
            const monthStr = d ? monthNames[d.getMonth()] : '___';
            const yearStr = d ? d.getFullYear() + 543 : '___';
            html += `<div style="margin-bottom:8px;padding:6px 0;${idx > 0 ? 'border-top:1px dashed var(--gray-300);' : ''}">
                <p style="font-size:13px">ใบจ่ายน้ำมันหรือใบกำกับขนส่งน้ำมันลำดับที่ <u>&nbsp;${idx + 1}&nbsp;</u>
                    เลขที่ <u>&nbsp;${doc.docNo || '___'}&nbsp;</u>
                    ลงวันที่ <u>&nbsp;${dayStr}&nbsp;</u>
                    เดือน <u>&nbsp;${monthStr}&nbsp;</u>
                    พ.ศ. <u>&nbsp;${yearStr}&nbsp;</u></p>
                <p style="font-size:13px;margin-top:2px">ของผู้ค่าส่งน้ำมันราย <u>&nbsp;${doc.supplier || '___'}&nbsp;</u>
                    &nbsp;&nbsp;ผู้จ่ายน้ำมัน <u>&nbsp;${doc.distributor || '___'}&nbsp;</u></p>
            </div>`;
        });
    }
    html += `</div>`;

    html += `</div>`;
    return html;
}

// ===== REPORT C: สรุปยอดน้ำมันรายเดือน =====
function generateReportC(stationId, yearMonth) {
    const fuelTypes = getStationFuelTypes(stationId);
    const [year, month] = yearMonth.split('-').map(Number);
    const daysInMonth = new Date(year, month, 0).getDate();

    // Collect all daily records for this month
    const monthRecords = [];
    for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const rec = DB.getDailyRecord(stationId, dateStr);
        if (rec) monthRecords.push({ date: dateStr, record: rec });
    }

    // First and last records
    const firstRec = monthRecords.length > 0 ? monthRecords[0].record : null;
    const lastRec = monthRecords.length > 0 ? monthRecords[monthRecords.length - 1].record : null;

    // Aggregate
    const monthlyData = {};
    fuelTypes.forEach(ft => {
        monthlyData[ft] = {
            endOfMonthDip: 0,
            beginningStock: 0,
            totalReceived: 0,
            totalSold: 0,
        };
    });

    // Beginning stock from first record
    if (firstRec) {
        const firstStock = getStockByFuelType(firstRec, stationId);
        fuelTypes.forEach(ft => {
            if (firstStock[ft]) monthlyData[ft].beginningStock = firstStock[ft].openingStock;
        });
    }

    // End of month dip from last record
    if (lastRec) {
        const lastStock = getStockByFuelType(lastRec, stationId);
        fuelTypes.forEach(ft => {
            if (lastStock[ft]) monthlyData[ft].endOfMonthDip = lastStock[ft].actualDip;
        });
    }

    // Sum received and sold across all days
    monthRecords.forEach(({ record }) => {
        const dayStock = getStockByFuelType(record, stationId);
        const daySold = getMeterLitersByFuelType(record, stationId);
        fuelTypes.forEach(ft => {
            if (dayStock[ft]) monthlyData[ft].totalReceived += dayStock[ft].fuelAdded;
            if (daySold[ft]) monthlyData[ft].totalSold += daySold[ft];
        });
    });

    let html = `<div class="tax-report">`;
    html += reportHeader('ส่วน ค', fmtThaiMonth(yearMonth), stationId);
    html += `<p style="text-align:right;font-size:12px">หน่วยนับ : ลิตร &nbsp; จำนวนวันที่มีข้อมูล: ${monthRecords.length} วัน</p>`;

    html += `<table class="tax-report-table">
        <thead><tr><th>รายการ</th>`;
    fuelTypes.forEach(ft => {
        html += `<th>${REF.fuelTypeLabels[ft] || ft}</th>`;
    });
    html += `</tr></thead><tbody>`;

    // Row 1: ยอดน้ำมันวัดได้สิ้นเดือน
    html += `<tr><td>1. ยอดน้ำมันสะสมวัดได้ ณ วันสิ้นเดือน</td>`;
    fuelTypes.forEach(ft => html += `<td class="number">${fmtDec(monthlyData[ft].endOfMonthDip, 1)}</td>`);
    html += `</tr>`;

    // Row 2: รวมวัดได้จริงสิ้นเดือน
    html += `<tr class="tax-summary-row"><td>2. รวมยอดน้ำมันวัดได้จริงสิ้นเดือน</td>`;
    fuelTypes.forEach(ft => html += `<td class="number">${fmtDec(monthlyData[ft].endOfMonthDip, 1)}</td>`);
    html += `</tr>`;

    // Row 3: ต้นเดือน
    html += `<tr><td>3. น้ำมันในถัง ณ วันต้นเดือน</td>`;
    fuelTypes.forEach(ft => html += `<td class="number">${fmtDec(monthlyData[ft].beginningStock, 1)}</td>`);
    html += `</tr>`;

    // Row 4: บวก รับระหว่างเดือน
    html += `<tr><td>4. บวก ยอดน้ำมันรับระหว่างเดือน</td>`;
    fuelTypes.forEach(ft => html += `<td class="number">${fmtDec(monthlyData[ft].totalReceived, 1)}</td>`);
    html += `</tr>`;

    // Row 5: หัก ขายระหว่างเดือน
    html += `<tr><td>5. หัก ยอดน้ำมันขายระหว่างเดือน</td>`;
    fuelTypes.forEach(ft => html += `<td class="number">${fmtDec(monthlyData[ft].totalSold, 1)}</td>`);
    html += `</tr>`;

    // Row 6: คงเหลือในบัญชี (3+4-5)
    html += `<tr class="tax-summary-row"><td>6. น้ำมันคงเหลือในบัญชี (3+4-5)</td>`;
    const bookRemaining = {};
    fuelTypes.forEach(ft => {
        const d = monthlyData[ft];
        bookRemaining[ft] = d.beginningStock + d.totalReceived - d.totalSold;
        html += `<td class="number">${fmtDec(bookRemaining[ft], 1)}</td>`;
    });
    html += `</tr>`;

    // Row 7: ผลต่าง (2-6)
    html += `<tr><td>7. ผลต่างน้ำมันปัจจุบัน (2-6)</td>`;
    fuelTypes.forEach(ft => {
        const variance = monthlyData[ft].endOfMonthDip - bookRemaining[ft];
        html += `<td class="number ${variance >= 0 ? 'variance-positive' : 'variance-negative'}">${fmtDec(variance, 1)}</td>`;
    });
    html += `</tr>`;

    // Row 8: % เพิ่ม/ลด
    html += `<tr><td>8. ร้อยละเพิ่มขึ้น/ลดลง (7/5×100)</td>`;
    fuelTypes.forEach(ft => {
        const variance = monthlyData[ft].endOfMonthDip - bookRemaining[ft];
        const soldAmt = monthlyData[ft].totalSold;
        const pct = soldAmt > 0 ? (variance / soldAmt * 100) : 0;
        html += `<td class="number">${fmtDec(pct, 2)}%</td>`;
    });
    html += `</tr>`;

    html += `</tbody></table></div>`;
    return html;
}
