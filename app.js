// ===== REFERENCE DATA =====
const REF = {
    stations: [
        { id: 'ST01', name: 'ทองอยู่โฮลดิ้ง' },
        { id: 'ST02', name: 'ทองอยู่โฮลดิ้ง สาขา 4' },
        { id: 'ST03', name: 'ทองอยู่โฮลดิ้ง สาขา 5' },
        { id: 'ST04', name: 'ทีวีเอส ออยล์' },
        { id: 'ST05', name: 'นิภาปิโตรเลียม' },
        { id: 'ST06', name: 'ธงชัยปิโตรเลียม' },
        { id: 'ST07', name: 'ธารกรปิโตรเลียม' },
        { id: 'ST08', name: 'ธนิดาสะพานขาว' },
        { id: 'ST09', name: 'ดาวบุณยเกียรติ' },
        { id: 'ST10', name: 'ดาวหนองตะมะ' },
        { id: 'ST11', name: 'ศรีสะเกษแสงอรุณ' },
        { id: 'ST12', name: 'ศรีสะเกษทวีชัย' },
        { id: 'ST13', name: 'ทวีคูณออยล์' },
    ],
    staff: [
        { id: 'S01', name: 'ขวัญ' },
        { id: 'S02', name: 'เบญ' },
        { id: 'S03', name: 'มิลค์' },
        { id: 'S04', name: 'ลัก' },
        { id: 'S05', name: 'เร' },
        { id: 'S06', name: 'หนา' },
        { id: 'S07', name: 'มิว' },
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
        { key: 'ST12-LPG-02', stationId: 'ST12', fuelType: 'LPG', label: 'ถังแอลพีจี (2)', capacity: 0 },
        { key: 'ST12-LPG-03', stationId: 'ST12', fuelType: 'LPG', label: 'ถังแอลพีจี (3)', capacity: 0 },
        { key: 'ST13-D-01', stationId: 'ST13', fuelType: 'Diesel', label: 'ถังดีเซล (1)', capacity: 20000 },
        { key: 'ST13-B95-01', stationId: 'ST13', fuelType: 'Benzyne 95', label: 'ถังเบนซิน 95 (1)', capacity: 15000 },
        { key: 'ST13-G91-01', stationId: 'ST13', fuelType: 'Gasohol 91', label: 'ถังแก๊ส 91 (1)', capacity: 15000 },
        { key: 'ST13-G95-01', stationId: 'ST13', fuelType: 'Gasohol 95', label: 'ถังแก๊ส 95 (1)', capacity: 15000 },
        { key: 'ST13-E20-01', stationId: 'ST13', fuelType: 'E 20', label: 'ถัง E20 (1)', capacity: 15000 },
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
        // ST05 นิภาปิโตรเลียม
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
        // ST06 ธงชัยปิโตรเลียม
        { id: 'M117', tankKey: 'ST06-D-01', label: 'มือจ่าย 1' },
        { id: 'M118', tankKey: 'ST06-D-01', label: 'มือจ่าย 2' },
        { id: 'M119', tankKey: 'ST06-D-01', label: 'มือจ่าย 3' },
        { id: 'M120', tankKey: 'ST06-D-01', label: 'มือจ่าย 4' },
        { id: 'M121', tankKey: 'ST06-D-01', label: 'มือจ่าย 5' },
        { id: 'M122', tankKey: 'ST06-D-01', label: 'มือจ่าย 6' },
        { id: 'M123', tankKey: 'ST06-D-02', label: 'มือจ่าย 1' },
        { id: 'M124', tankKey: 'ST06-D-02', label: 'มือจ่าย 2' },
        { id: 'M125', tankKey: 'ST06-D-02', label: 'มือจ่าย 3' },
        { id: 'M126', tankKey: 'ST06-D-02', label: 'มือจ่าย 4' },
        { id: 'M127', tankKey: 'ST06-D-03', label: 'มือจ่าย 1' },
        { id: 'M128', tankKey: 'ST06-D-03', label: 'มือจ่าย 2' },
        { id: 'M129', tankKey: 'ST06-D-03', label: 'มือจ่าย 3' },
        { id: 'M130', tankKey: 'ST06-D-03', label: 'มือจ่าย 4' },
        { id: 'M131', tankKey: 'ST06-G95-01', label: 'มือจ่าย 1' },
        { id: 'M132', tankKey: 'ST06-G95-01', label: 'มือจ่าย 2' },
        { id: 'M133', tankKey: 'ST06-G95-01', label: 'มือจ่าย 3' },
        { id: 'M134', tankKey: 'ST06-G95-01', label: 'มือจ่าย 4' },
        { id: 'M135', tankKey: 'ST06-DP-01', label: 'มือจ่าย 1' },
        { id: 'M136', tankKey: 'ST06-DP-01', label: 'มือจ่าย 2' },
        { id: 'M137', tankKey: 'ST06-G91-01', label: 'มือจ่าย 1' },
        { id: 'M138', tankKey: 'ST06-G91-01', label: 'มือจ่าย 2' },
        { id: 'M139', tankKey: 'ST06-G91-01', label: 'มือจ่าย 3' },
        { id: 'M140', tankKey: 'ST06-G91-01', label: 'มือจ่าย 4' },
        { id: 'M141', tankKey: 'ST06-E20-01', label: 'มือจ่าย 1' },
        { id: 'M142', tankKey: 'ST06-E20-01', label: 'มือจ่าย 2' },
        { id: 'M143', tankKey: 'ST06-E20-01', label: 'มือจ่าย 3' },
        { id: 'M144', tankKey: 'ST06-E20-01', label: 'มือจ่าย 4' },
        // ST07 ธารกรปิโตรเลียม
        { id: 'M145', tankKey: 'ST07-D-01', label: 'มือจ่าย 1' },
        { id: 'M146', tankKey: 'ST07-D-01', label: 'มือจ่าย 2' },
        { id: 'M147', tankKey: 'ST07-D-01', label: 'มือจ่าย 3' },
        { id: 'M148', tankKey: 'ST07-D-01', label: 'มือจ่าย 4' },
        { id: 'M149', tankKey: 'ST07-D-02', label: 'มือจ่าย 1' },
        { id: 'M150', tankKey: 'ST07-D-02', label: 'มือจ่าย 2' },
        { id: 'M151', tankKey: 'ST07-G95-01', label: 'มือจ่าย 1' },
        { id: 'M152', tankKey: 'ST07-G95-01', label: 'มือจ่าย 2' },
        { id: 'M153', tankKey: 'ST07-G95-01', label: 'มือจ่าย 3' },
        { id: 'M154', tankKey: 'ST07-G95-01', label: 'มือจ่าย 4' },
        { id: 'M155', tankKey: 'ST07-G95P-01', label: 'มือจ่าย 1' },
        { id: 'M156', tankKey: 'ST07-G95P-01', label: 'มือจ่าย 2' },
        { id: 'M157', tankKey: 'ST07-G95P-01', label: 'มือจ่าย 3' },
        { id: 'M158', tankKey: 'ST07-G95P-01', label: 'มือจ่าย 4' },
        { id: 'M159', tankKey: 'ST07-G91-01', label: 'มือจ่าย 1' },
        { id: 'M160', tankKey: 'ST07-G91-01', label: 'มือจ่าย 2' },
        { id: 'M161', tankKey: 'ST07-G91-01', label: 'มือจ่าย 3' },
        { id: 'M162', tankKey: 'ST07-G91-01', label: 'มือจ่าย 4' },
        { id: 'M163', tankKey: 'ST07-E20-01', label: 'มือจ่าย 1' },
        { id: 'M164', tankKey: 'ST07-E20-01', label: 'มือจ่าย 2' },
        // ST08 ธนิดาสะพานขาว
        { id: 'M165', tankKey: 'ST08-D-01', label: 'มือจ่าย 1' },
        { id: 'M166', tankKey: 'ST08-D-01', label: 'มือจ่าย 2' },
        { id: 'M167', tankKey: 'ST08-D-01', label: 'มือจ่าย 3' },
        { id: 'M168', tankKey: 'ST08-D-01', label: 'มือจ่าย 4' },
        { id: 'M169', tankKey: 'ST08-D-01', label: 'มือจ่าย 5' },
        { id: 'M170', tankKey: 'ST08-D-01', label: 'มือจ่าย 6' },
        { id: 'M171', tankKey: 'ST08-D-02', label: 'มือจ่าย 1' },
        { id: 'M172', tankKey: 'ST08-D-02', label: 'มือจ่าย 2' },
        { id: 'M173', tankKey: 'ST08-D-02', label: 'มือจ่าย 3' },
        { id: 'M174', tankKey: 'ST08-D-02', label: 'มือจ่าย 4' },
        { id: 'M175', tankKey: 'ST08-G91-01', label: 'มือจ่าย 1' },
        { id: 'M176', tankKey: 'ST08-G91-01', label: 'มือจ่าย 2' },
        { id: 'M177', tankKey: 'ST08-G91-01', label: 'มือจ่าย 3' },
        { id: 'M178', tankKey: 'ST08-G91-01', label: 'มือจ่าย 4' },
        { id: 'M179', tankKey: 'ST08-G95-01', label: 'มือจ่าย 1' },
        { id: 'M180', tankKey: 'ST08-G95-01', label: 'มือจ่าย 2' },
        { id: 'M181', tankKey: 'ST08-G95-01', label: 'มือจ่าย 3' },
        { id: 'M182', tankKey: 'ST08-G95-01', label: 'มือจ่าย 4' },
        { id: 'M183', tankKey: 'ST08-B95-01', label: 'มือจ่าย 1' },
        { id: 'M184', tankKey: 'ST08-B95-01', label: 'มือจ่าย 2' },
        { id: 'M185', tankKey: 'ST08-E20-01', label: 'มือจ่าย 1' },
        { id: 'M186', tankKey: 'ST08-E20-01', label: 'มือจ่าย 2' },
        { id: 'M187', tankKey: 'ST08-E20-01', label: 'มือจ่าย 3' },
        { id: 'M188', tankKey: 'ST08-E20-01', label: 'มือจ่าย 4' },
        { id: 'M189', tankKey: 'ST08-DP-01', label: 'มือจ่าย 1' },
        { id: 'M190', tankKey: 'ST08-DP-01', label: 'มือจ่าย 2' },
        // ST09 ดาวบุณยเกียรติ
        { id: 'M191', tankKey: 'ST09-D-01', label: 'มือจ่าย 1' },
        { id: 'M192', tankKey: 'ST09-D-01', label: 'มือจ่าย 2' },
        { id: 'M193', tankKey: 'ST09-D-01', label: 'มือจ่าย 3' },
        { id: 'M194', tankKey: 'ST09-D-01', label: 'มือจ่าย 4' },
        { id: 'M195', tankKey: 'ST09-D-01', label: 'มือจ่าย 5' },
        { id: 'M196', tankKey: 'ST09-D-01', label: 'มือจ่าย 6' },
        { id: 'M197', tankKey: 'ST09-D-02', label: 'มือจ่าย 1' },
        { id: 'M198', tankKey: 'ST09-D-02', label: 'มือจ่าย 2' },
        { id: 'M199', tankKey: 'ST09-B95-01', label: 'มือจ่าย 1' },
        { id: 'M200', tankKey: 'ST09-B95-01', label: 'มือจ่าย 2' },
        { id: 'M201', tankKey: 'ST09-B95-02', label: 'มือจ่าย 1' },
        { id: 'M202', tankKey: 'ST09-B95-02', label: 'มือจ่าย 2' },
        { id: 'M203', tankKey: 'ST09-E20-01', label: 'มือจ่าย 1' },
        { id: 'M204', tankKey: 'ST09-E20-01', label: 'มือจ่าย 2' },
        { id: 'M205', tankKey: 'ST09-G95-01', label: 'มือจ่าย 1' },
        { id: 'M206', tankKey: 'ST09-G95-01', label: 'มือจ่าย 2' },
        { id: 'M207', tankKey: 'ST09-G91-01', label: 'มือจ่าย 1' },
        { id: 'M208', tankKey: 'ST09-G91-01', label: 'มือจ่าย 2' },
        // ST10 ดาวหนองตะมะ
        { id: 'M209', tankKey: 'ST10-D-01', label: 'มือจ่าย 1' },
        { id: 'M210', tankKey: 'ST10-D-01', label: 'มือจ่าย 2' },
        { id: 'M211', tankKey: 'ST10-D-01', label: 'มือจ่าย 3' },
        { id: 'M212', tankKey: 'ST10-D-01', label: 'มือจ่าย 4' },
        { id: 'M213', tankKey: 'ST10-E20-01', label: 'มือจ่าย 1' },
        { id: 'M214', tankKey: 'ST10-E20-01', label: 'มือจ่าย 2' },
        { id: 'M215', tankKey: 'ST10-DP-01', label: 'มือจ่าย 1' },
        { id: 'M216', tankKey: 'ST10-DP-01', label: 'มือจ่าย 2' },
        { id: 'M217', tankKey: 'ST10-G91-01', label: 'มือจ่าย 1' },
        { id: 'M218', tankKey: 'ST10-G91-01', label: 'มือจ่าย 2' },
        { id: 'M219', tankKey: 'ST10-G95-01', label: 'มือจ่าย 1' },
        { id: 'M220', tankKey: 'ST10-G95-01', label: 'มือจ่าย 2' },
        // ST11 ศรีสะเกษแสงอรุณ
        { id: 'M221', tankKey: 'ST11-D-01', label: 'มือจ่าย 1' },
        { id: 'M222', tankKey: 'ST11-D-01', label: 'มือจ่าย 2' },
        { id: 'M223', tankKey: 'ST11-D-01', label: 'มือจ่าย 3' },
        { id: 'M224', tankKey: 'ST11-D-01', label: 'มือจ่าย 4' },
        { id: 'M225', tankKey: 'ST11-D-02', label: 'มือจ่าย 1' },
        { id: 'M226', tankKey: 'ST11-D-02', label: 'มือจ่าย 2' },
        { id: 'M227', tankKey: 'ST11-D-02', label: 'มือจ่าย 3' },
        { id: 'M228', tankKey: 'ST11-D-02', label: 'มือจ่าย 4' },
        { id: 'M229', tankKey: 'ST11-DP-01', label: 'มือจ่าย 1' },
        { id: 'M230', tankKey: 'ST11-DP-01', label: 'มือจ่าย 2' },
        { id: 'M231', tankKey: 'ST11-E20-01', label: 'มือจ่าย 1' },
        { id: 'M232', tankKey: 'ST11-E20-01', label: 'มือจ่าย 2' },
        { id: 'M233', tankKey: 'ST11-G91-01', label: 'มือจ่าย 1' },
        { id: 'M234', tankKey: 'ST11-G91-01', label: 'มือจ่าย 2' },
        { id: 'M235', tankKey: 'ST11-G91-01', label: 'มือจ่าย 3' },
        { id: 'M236', tankKey: 'ST11-G91-01', label: 'มือจ่าย 4' },
        { id: 'M237', tankKey: 'ST11-G95-01', label: 'มือจ่าย 1' },
        { id: 'M238', tankKey: 'ST11-G95-01', label: 'มือจ่าย 2' },
        { id: 'M239', tankKey: 'ST11-G95-01', label: 'มือจ่าย 3' },
        { id: 'M240', tankKey: 'ST11-G95-01', label: 'มือจ่าย 4' },
        { id: 'M241', tankKey: 'ST11-B95-01', label: 'มือจ่าย 1' },
        { id: 'M242', tankKey: 'ST11-B95-01', label: 'มือจ่าย 2' },
        // ST12 ศรีสะเกษทวีชัย
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
        { id: 'M259', tankKey: 'ST12-LPG-02', label: 'มือจ่าย 1' },
        { id: 'M260', tankKey: 'ST12-LPG-02', label: 'มือจ่าย 2' },
        { id: 'M261', tankKey: 'ST12-LPG-02', label: 'มือจ่าย 3' },
        { id: 'M262', tankKey: 'ST12-LPG-02', label: 'มือจ่าย 4' },
        { id: 'M263', tankKey: 'ST12-LPG-03', label: 'มือจ่าย 1' },
        { id: 'M264', tankKey: 'ST12-LPG-03', label: 'มือจ่าย 2' },
        { id: 'M265', tankKey: 'ST12-LPG-03', label: 'มือจ่าย 3' },
        { id: 'M266', tankKey: 'ST12-LPG-03', label: 'มือจ่าย 4' },
        // ST13 ทวีคูณออยล์
        { id: 'M267', tankKey: 'ST13-D-01', label: 'มือจ่าย 1' },
        { id: 'M268', tankKey: 'ST13-D-01', label: 'มือจ่าย 2' },
        { id: 'M269', tankKey: 'ST13-D-01', label: 'มือจ่าย 3' },
        { id: 'M270', tankKey: 'ST13-D-01', label: 'มือจ่าย 4' },
        { id: 'M271', tankKey: 'ST13-B95-01', label: 'มือจ่าย 1' },
        { id: 'M272', tankKey: 'ST13-B95-01', label: 'มือจ่าย 2' },
        { id: 'M273', tankKey: 'ST13-B95-01', label: 'มือจ่าย 3' },
        { id: 'M274', tankKey: 'ST13-B95-01', label: 'มือจ่าย 4' },
        { id: 'M275', tankKey: 'ST13-G91-01', label: 'มือจ่าย 1' },
        { id: 'M276', tankKey: 'ST13-G91-01', label: 'มือจ่าย 2' },
        { id: 'M277', tankKey: 'ST13-G91-01', label: 'มือจ่าย 3' },
        { id: 'M278', tankKey: 'ST13-G91-01', label: 'มือจ่าย 4' },
        { id: 'M279', tankKey: 'ST13-G95-01', label: 'มือจ่าย 1' },
        { id: 'M280', tankKey: 'ST13-G95-01', label: 'มือจ่าย 2' },
        { id: 'M281', tankKey: 'ST13-G95-01', label: 'มือจ่าย 3' },
        { id: 'M282', tankKey: 'ST13-G95-01', label: 'มือจ่าย 4' },
        { id: 'M283', tankKey: 'ST13-E20-01', label: 'มือจ่าย 1' },
        { id: 'M284', tankKey: 'ST13-E20-01', label: 'มือจ่าย 2' },
        { id: 'M285', tankKey: 'ST13-E20-01', label: 'มือจ่าย 3' },
        { id: 'M286', tankKey: 'ST13-E20-01', label: 'มือจ่าย 4' },
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
        'ค่าใช้จ่ายจิปาถะ',
        'ใบเบิก',
        'ค่าน้ำ',
        'ค่าไฟ',
        'ค่าแรง',
        'ค่าซ่อมบำรุง',
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

function getStationName(id) {
    const s = REF.stations.find(s => s.id === id);
    return s ? s.name : id;
}

function getFuelClass(fuelType) {
    return 'fuel-' + fuelType.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
}

// ===== DATA STORAGE (localStorage) =====
const DB = {
    _key: 'fuelAccounting_v1',
    _load() {
        try {
            return JSON.parse(localStorage.getItem(this._key)) || {};
        } catch { return {}; }
    },
    _save(data) {
        localStorage.setItem(this._key, JSON.stringify(data));
    },
    // Daily records: keyed by "stationId_date"
    getDailyRecord(stationId, date) {
        const data = this._load();
        const key = `${stationId}_${date}`;
        return data[key] || null;
    },
    saveDailyRecord(record) {
        const data = this._load();
        const key = `${record.stationId}_${record.date}`;
        data[key] = record;
        this._save(data);
    },
    getAllRecords() {
        const data = this._load();
        return Object.values(data).sort((a, b) => b.date.localeCompare(a.date));
    },
    deleteRecord(stationId, date) {
        const data = this._load();
        delete data[`${stationId}_${date}`];
        this._save(data);
    },
    // Fuel prices (with last-updated timestamp)
    _migrateFuelPrices() {
        // One-time migration from v1 to v2
        if (!localStorage.getItem('fuelPrices_v2') && localStorage.getItem('fuelPrices_v1')) {
            try {
                const old = JSON.parse(localStorage.getItem('fuelPrices_v1'));
                if (old && typeof old === 'object') {
                    localStorage.setItem('fuelPrices_v2', JSON.stringify({ prices: old, updatedAt: new Date().toISOString() }));
                    localStorage.removeItem('fuelPrices_v1');
                }
            } catch {}
        }
    },
    getFuelPrices() {
        this._migrateFuelPrices();
        try {
            const data = JSON.parse(localStorage.getItem('fuelPrices_v2')) || {};
            return data.prices || {};
        } catch { return {}; }
    },
    getFuelPricesInfo() {
        this._migrateFuelPrices();
        try {
            return JSON.parse(localStorage.getItem('fuelPrices_v2')) || { prices: {}, updatedAt: null };
        } catch { return { prices: {}, updatedAt: null }; }
    },
    saveFuelPrices(prices) {
        const data = { prices, updatedAt: new Date().toISOString() };
        localStorage.setItem('fuelPrices_v2', JSON.stringify(data));
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
    chartTypes: { revenue: 'bar', byStation: 'bar', trend: 'line', expenses: 'doughnut', variance: 'bar' },
};
let chartInstances = {};

const CHART_COLORS = ['#4f46e5','#06b6d4','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899','#6366f1','#14b8a6','#f97316','#84cc16','#a855f7','#64748b'];

// ===== DASHBOARD DATA HELPERS =====
function getFilteredRecords() {
    const all = DB.getAllRecords();
    const { period, selectedDate, selectedMonth, selectedYear, stationFilter } = dashboardState;
    return all.filter(r => {
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

// ===== NAVIGATION =====
function navigateTo(page) {
    currentPage = page;
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const link = document.querySelector(`[data-page="${page}"]`);
    if (link) link.classList.add('active');

    const titles = {
        'dashboard': 'แดชบอร์ด',
        'daily-entry': 'บันทึกประจำวัน',
        'history': 'ประวัติรายการ',
        'reference': 'ข้อมูลอ้างอิง',
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
        case 'daily-entry': renderDailyEntry(el); break;
        case 'history': renderHistory(el); break;
        case 'reference': renderReference(el); break;
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

        <div id="dashboardStats"></div>
        <div id="dashboardCharts"></div>
        <div id="dashboardTable"></div>
    `;

    renderDashboardContent();
}

function renderDashboardContent() {
    const records = getFilteredRecords();
    let totalFuel = 0, totalProducts = 0, totalExpenses = 0, totalGross = 0;
    records.forEach(r => {
        const f = r.finance || {};
        totalFuel += f.fuelSalesValue || 0;
        totalProducts += f.lubricantSales || 0;
        totalExpenses += f.siteExpenses || 0;
        totalGross += f.totalGrossIncome || 0;
    });

    const periodLabel = { day: 'วันนี้', month: 'เดือนนี้', year: 'ปีนี้' }[dashboardState.period] || '';

    // Stat cards
    document.getElementById('dashboardStats').innerHTML = `
        <div class="stats-grid">
            <div class="stat-card"><div class="stat-value">${records.length}</div><div class="stat-label">จำนวนรายการ</div></div>
            <div class="stat-card"><div class="stat-value">${fmt(totalFuel)}</div><div class="stat-label">รายได้น้ำมัน (บาท)</div></div>
            <div class="stat-card"><div class="stat-value">${fmt(totalProducts)}</div><div class="stat-label">รายได้สินค้า (บาท)</div></div>
            <div class="stat-card"><div class="stat-value">${fmt(totalGross)}</div><div class="stat-label">รายได้รวม (บาท)</div></div>
        </div>
    `;

    // Charts
    const ds = dashboardState;
    document.getElementById('dashboardCharts').innerHTML = `
        <div class="charts-grid">
            <div class="chart-section">
                <div class="chart-header">
                    <h3>รายได้รวม (น้ำมัน / สินค้า / อื่นๆ)</h3>
                    ${chartTypeBtns('revenue', ['bar', 'pie', 'doughnut'])}
                </div>
                <div class="chart-container"><canvas id="chartRevenue"></canvas></div>
            </div>
            <div class="chart-section">
                <div class="chart-header">
                    <h3>รายได้ตามสาขา</h3>
                    ${chartTypeBtns('byStation', ['bar', 'line', 'pie'])}
                </div>
                <div class="chart-container"><canvas id="chartByStation"></canvas></div>
            </div>
            <div class="chart-section">
                <div class="chart-header">
                    <h3>แนวโน้มรายได้</h3>
                    ${chartTypeBtns('trend', ['line', 'bar'])}
                </div>
                <div class="chart-container"><canvas id="chartTrend"></canvas></div>
            </div>
            <div class="chart-section">
                <div class="chart-header">
                    <h3>ค่าใช้จ่ายตามประเภท</h3>
                    ${chartTypeBtns('expenses', ['doughnut', 'pie', 'bar'])}
                </div>
                <div class="chart-container"><canvas id="chartExpenses"></canvas></div>
            </div>
            <div class="chart-section full-width">
                <div class="chart-header">
                    <h3>ส่วนต่างเงินส่ง (ตามสาขา)</h3>
                    ${chartTypeBtns('variance', ['bar', 'line'])}
                </div>
                <div class="chart-container"><canvas id="chartVariance"></canvas></div>
            </div>
        </div>
    `;

    // Table
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
                        ${records.slice(0, 30).map(r => {
                            const f = r.finance || {};
                            const v = (f.actualCashSent || 0) - (f.expectedCash || 0);
                            return `<tr class="table-row-clickable" onclick="loadRecord('${r.stationId}','${r.date}')">
                                <td>${formatDateThai(r.date)}</td><td>${getStationName(r.stationId)}</td>
                                <td class="number">${fmt(f.fuelSalesValue)}</td><td class="number">${fmt(f.lubricantSales)}</td>
                                <td class="number">${fmt(f.expectedCash)}</td><td class="number">${fmt(f.actualCashSent)}</td>
                                <td class="number ${v >= 0 ? 'variance-positive' : 'variance-negative'}">${fmt(v)}</td>
                            </tr>`;
                        }).join('') || '<tr><td colspan="7" class="empty-state">ยังไม่มีรายการ</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    renderDashboardCharts();
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
}

function loadRecord(stationId, date) {
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
                    <input type="date" id="entryDate" value="${selectedDate}">
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
                <button class="sub-tab" data-subtab="expenses" onclick="switchSubTab(this)">4. ค่าใช้จ่าย</button>
                <button class="sub-tab" data-subtab="summary" onclick="switchSubTab(this)">5. สรุปบัญชี</button>
            </div>

            <div id="subtab-meters" class="sub-tab-content active"></div>
            <div id="subtab-stock" class="sub-tab-content"></div>
            <div id="subtab-products" class="sub-tab-content"></div>
            <div id="subtab-expenses" class="sub-tab-content"></div>
            <div id="subtab-summary" class="sub-tab-content"></div>

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
    if (tab === 'expenses') renderExpenseTab();
    if (tab === 'summary') renderSummaryTab();
}

// Current form data in memory
let formData = {
    meterReadings: {},  // { meterId: { start, end } }
    stockEntries: {},   // { tankKey: { openingStock, fuelAdded, actualDip } }
    productSales: [],   // [{ productId, quantity }]
    expenses: [],       // [{ category, amount, note }]
    finance: {          // Finance summary inputs (manual fields)
        otherIncome: 0,
        creditSales: 0,
        creditCardAmt: 0,
        bluecardAmt: 0,
        qrTransferAmt: 0,
        discounts: 0,
        cashDay: 0,        // กะกลางวัน
        cashNight: 0,      // กะกลางคืน
        slipDay: null,      // สลิปกะกลางวัน (base64)
        slipNight: null,    // สลิปกะกลางคืน (base64)
        remark: '',
    },
};

// Find previous day's record and carry over meter-end → meter-start, stock-dip → opening-stock
function getPreviousDayData(stationId, dateStr) {
    const result = { meterReadings: {}, stockEntries: {} };

    // Search backwards up to 30 days for the most recent record
    const d = new Date(dateStr);
    for (let i = 1; i <= 30; i++) {
        const prev = new Date(d);
        prev.setDate(prev.getDate() - i);
        const prevStr = prev.toISOString().split('T')[0];
        const prevRecord = DB.getDailyRecord(stationId, prevStr);
        if (prevRecord) {
            // Meter carry-over: previous end → current start
            if (prevRecord.meterReadings) {
                Object.keys(prevRecord.meterReadings).forEach(meterId => {
                    const r = prevRecord.meterReadings[meterId];
                    if (r.end !== '' && r.end !== undefined && r.end !== null) {
                        result.meterReadings[meterId] = { start: r.end, end: '' };
                    }
                });
            }
            // Stock carry-over: previous actualDip → current openingStock
            if (prevRecord.stockEntries) {
                Object.keys(prevRecord.stockEntries).forEach(tankKey => {
                    const s = prevRecord.stockEntries[tankKey];
                    const carryValue = parseNum(s.actualDip) > 0 ? s.actualDip : s.openingStock;
                    if (carryValue && parseNum(carryValue) > 0) {
                        result.stockEntries[tankKey] = { openingStock: carryValue, fuelAdded: '', actualDip: '' };
                    }
                });
            }
            break; // Found the most recent previous record
        }
    }
    return result;
}

function onStationChange(existingRecord) {
    const stationId = document.getElementById('entryStation').value;
    const tabsDiv = document.getElementById('entryTabs');

    if (!stationId) {
        tabsDiv.style.display = 'none';
        return;
    }
    tabsDiv.style.display = '';

    // Initialize or load form data
    if (existingRecord) {
        formData = {
            meterReadings: existingRecord.meterReadings || {},
            stockEntries: existingRecord.stockEntries || {},
            productSales: existingRecord.productSales || [],
            expenses: existingRecord.expenses || [],
            finance: existingRecord.finance || {
                otherIncome: 0, creditSales: 0, creditCardAmt: 0,
                bluecardAmt: 0, qrTransferAmt: 0, discounts: 0, cashDay: 0, cashNight: 0, slipDay: null, slipNight: null, remark: '',
            },
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
                expenses: existing.expenses || [],
                finance: existing.finance || {
                    otherIncome: 0, creditSales: 0, creditCardAmt: 0,
                    bluecardAmt: 0, qrTransferAmt: 0, discounts: 0, cashDay: 0, cashNight: 0, slipDay: null, slipNight: null, remark: '',
                },
            };
        } else {
            // New record: carry over from previous day
            const prevData = getPreviousDayData(stationId, date);
            formData = {
                meterReadings: prevData.meterReadings,
                stockEntries: prevData.stockEntries,
                productSales: [],
                expenses: [],
                finance: { otherIncome: 0, creditSales: 0, creditCardAmt: 0, bluecardAmt: 0, qrTransferAmt: 0, discounts: 0, actualCashSent: 0, remark: '' },
            };
        }
    }

    renderMeterTab(stationId);
    renderStockTab(stationId);
    renderProductTab();
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
            const reading = formData.meterReadings[meter.id] || {};
            const start = reading.start || '';
            const end = reading.end || '';
            const liters = (start !== '' && end !== '') ? (parseNum(end) - parseNum(start)) : 0;

            html += `<tr>
                <td>${meter.label} (${meter.id})</td>
                <td class="number"><input type="number" step="0.01" value="${start}"
                    data-meter="${meter.id}" data-field="start"
                    onchange="updateMeter(this)"></td>
                <td class="number"><input type="number" step="0.01" value="${end}"
                    data-meter="${meter.id}" data-field="end"
                    onchange="updateMeter(this)"></td>
                <td class="number" id="liters-${meter.id}">${fmt(liters)}</td>
            </tr>`;
        });

        // Tank total row
        const tankLiters = meters.reduce((sum, m) => {
            const r = formData.meterReadings[m.id] || {};
            return sum + Math.max(0, parseNum(r.end) - parseNum(r.start));
        }, 0);

        html += `<tr class="table-row-summary">
            <td colspan="3">รวม ${tank.label}</td>
            <td class="number" id="tank-total-${tank.key}">${fmt(tankLiters)}</td>
        </tr>`;

        html += `</tbody></table></div></div>`;
    });

    html += '</div>';
    el.innerHTML = html;
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

    // Update tank total
    const meter = REF.meters.find(m => m.id === meterId);
    if (meter) {
        const tankMeters = REF.meters.filter(m => m.tankKey === meter.tankKey);
        const total = tankMeters.reduce((sum, m) => {
            const rd = formData.meterReadings[m.id] || {};
            return sum + Math.max(0, parseNum(rd.end) - parseNum(rd.start));
        }, 0);
        const totalEl = document.getElementById('tank-total-' + meter.tankKey);
        if (totalEl) totalEl.textContent = fmt(total);
    }
}

// ===== STOCK TAB =====
function renderStockTab(stationId) {
    const tanks = REF.tanks.filter(t => t.stationId === stationId);
    const el = document.getElementById('subtab-stock');

    let html = `<div class="card">
        <div class="card-header"><h3>บันทึกสต็อกน้ำมัน</h3></div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>ถัง</th>
                        <th>ประเภท</th>
                        <th class="number">สต็อกเปิด</th>
                        <th class="number">รับเพิ่ม</th>
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

        html += `<tr class="${getFuelClass(tank.fuelType)}">
            <td>${tank.label}</td>
            <td>${fuelLabel}</td>
            <td class="number"><input type="number" step="0.01" value="${entry.openingStock || ''}"
                data-tank="${tank.key}" data-field="openingStock" onchange="updateStock(this)"></td>
            <td class="number"><input type="number" step="0.01" value="${entry.fuelAdded || ''}"
                data-tank="${tank.key}" data-field="fuelAdded" onchange="updateStock(this)"></td>
            <td class="number" id="stock-sold-${tank.key}">${fmt(totalSold)}</td>
            <td class="number" id="stock-book-${tank.key}">${fmt(bookStock)}</td>
            <td class="number"><input type="number" step="0.01" value="${entry.actualDip || ''}"
                data-tank="${tank.key}" data-field="actualDip" onchange="updateStock(this)"></td>
            <td class="number ${variance >= 0 ? 'variance-positive' : 'variance-negative'}" id="stock-var-${tank.key}">${fmt(variance)}</td>
        </tr>`;
    });

    html += '</tbody></table></div></div>';
    el.innerHTML = html;
}

function updateStock(input) {
    const tankKey = input.dataset.tank;
    const field = input.dataset.field;

    if (!formData.stockEntries[tankKey]) {
        formData.stockEntries[tankKey] = { openingStock: '', fuelAdded: '', actualDip: '' };
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
}

// ===== PRODUCT SALES TAB =====
function renderProductTab() {
    const el = document.getElementById('subtab-products');
    let html = `<div class="card">
        <div class="card-header">
            <h3>ขายสินค้า / น้ำมันหล่อลื่น</h3>
            <button class="btn btn-sm btn-primary" onclick="addProductRow()">+ เพิ่มรายการ</button>
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
        </table></div></div>`;

    el.innerHTML = html;
}

function addProductRow() {
    formData.productSales.push({ productId: '', quantity: 1, unitPrice: 0 });
    renderProductTab();
}

function removeProductRow(idx) {
    formData.productSales.splice(idx, 1);
    renderProductTab();
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
}

// ===== EXPENSES TAB =====
function renderExpenseTab() {
    const el = document.getElementById('subtab-expenses');
    let html = `<div class="card">
        <div class="card-header">
            <h3>ค่าใช้จ่าย</h3>
            <button class="btn btn-sm btn-primary" onclick="addExpenseRow()">+ เพิ่มรายการ</button>
        </div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>ประเภท</th>
                        <th class="number">จำนวนเงิน (บาท)</th>
                        <th>หมายเหตุ</th>
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
            <td><button class="btn-delete-row" onclick="removeExpenseRow(${idx})">&#10005;</button></td>
        </tr>`;
    });

    const totalExpenses = formData.expenses.reduce((sum, e) => sum + parseNum(e.amount), 0);

    html += `</tbody>
            <tfoot>
                <tr class="table-row-summary">
                    <td>รวมค่าใช้จ่าย</td>
                    <td class="number">${fmt(totalExpenses)}</td>
                    <td colspan="2"></td>
                </tr>
            </tfoot>
        </table></div></div>`;

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

// ===== SUMMARY TAB =====
function renderSummaryTab() {
    const stationId = document.getElementById('entryStation').value;
    if (!stationId) return;

    const el = document.getElementById('subtab-summary');
    const fuelPrices = DB.getFuelPrices();

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

    // Finance values
    const fin = formData.finance;
    const otherIncome = parseNum(fin.otherIncome);
    const totalGross = fuelSalesValue + lubricantSales + otherIncome;
    const creditSales = parseNum(fin.creditSales);
    const creditCard = parseNum(fin.creditCardAmt);
    const bluecard = parseNum(fin.bluecardAmt);
    const qrTransfer = parseNum(fin.qrTransferAmt);
    const discounts = parseNum(fin.discounts);
    const totalDeductions = creditSales + creditCard + bluecard + qrTransfer + discounts + siteExpenses;
    const expectedCash = totalGross - totalDeductions;
    const cashDay = parseNum(fin.cashDay);
    const cashNight = parseNum(fin.cashNight);
    const actualCash = cashDay + cashNight;
    const cashVariance = actualCash - expectedCash;

    const pricesInfo = DB.getFuelPricesInfo();
    const priceUpdatedAt = pricesInfo.updatedAt ? formatDateThai(pricesInfo.updatedAt.split('T')[0]) : 'ยังไม่ได้ตั้งค่า';
    const hasPrices = Object.values(fuelPrices).some(v => parseNum(v) > 0);

    let html = `
    <div class="finance-grid">
        <div class="finance-panel">
            <div class="price-header-flex">
                <div>
                    <h4>ราคาน้ำมัน (บาท/ลิตร)</h4>
                    <div class="fuel-price-updated">อัปเดตล่าสุด: ${priceUpdatedAt}</div>
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
        <div class="card-header"><h3>สรุปบัญชีประจำวัน</h3></div>
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
                    <span class="summary-label">เงินเชื่อ</span>
                    <span><input type="number" step="0.01" class="compact-input" value="${fin.creditSales || ''}" onchange="formData.finance.creditSales=this.value;renderSummaryTab()"></span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">เครดิตการ์ด</span>
                    <span><input type="number" step="0.01" class="compact-input" value="${fin.creditCardAmt || ''}" onchange="formData.finance.creditCardAmt=this.value;renderSummaryTab()"></span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Bluecard</span>
                    <span><input type="number" step="0.01" class="compact-input" value="${fin.bluecardAmt || ''}" onchange="formData.finance.bluecardAmt=this.value;renderSummaryTab()"></span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">เงินโอน / QR</span>
                    <span><input type="number" step="0.01" class="compact-input" value="${fin.qrTransferAmt || ''}" onchange="formData.finance.qrTransferAmt=this.value;renderSummaryTab()"></span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">ส่วนลด</span>
                    <span><input type="number" step="0.01" class="compact-input" value="${fin.discounts || ''}" onchange="formData.finance.discounts=this.value;renderSummaryTab()"></span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">ค่าใช้จ่าย (จากแท็บค่าใช้จ่าย)</span>
                    <span class="summary-value">${fmt(siteExpenses)}</span>
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

function updateFuelPrice(input) {
    const fuelType = input.dataset.fuel;
    const prices = DB.getFuelPrices();
    prices[fuelType] = input.value;
    DB.saveFuelPrices(prices);
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
    const fuelPrices = DB.getFuelPrices();
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

    const fin = formData.finance;
    const otherIncome = parseNum(fin.otherIncome);
    const totalGross = fuelSalesValue + lubricantSales + otherIncome;
    const totalDeductions = parseNum(fin.creditSales) + parseNum(fin.creditCardAmt) +
        parseNum(fin.bluecardAmt) + parseNum(fin.qrTransferAmt) + parseNum(fin.discounts) + siteExpenses;
    const expectedCash = totalGross - totalDeductions;

    const record = {
        stationId,
        date,
        staffId,
        meterReadings: formData.meterReadings,
        stockEntries: formData.stockEntries,
        productSales: formData.productSales,
        expenses: formData.expenses,
        finance: {
            ...formData.finance,
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
    showToast('บันทึกข้อมูลสำเร็จ');
    editingRecord = null;
}

// ===== HISTORY PAGE =====
function renderHistory(el) {
    const records = DB.getAllRecords();

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
                <button class="btn btn-sm btn-outline" onclick="loadRecord('${r.stationId}','${r.date}')">แก้ไข</button>
                <button class="btn btn-sm btn-danger" onclick="deleteRecord('${r.stationId}','${r.date}')">ลบ</button>
            </td>
        </tr>`;
    }).join('');
}

function filterHistory() {
    const filter = document.getElementById('historyFilter').value;
    const records = DB.getAllRecords().filter(r => !filter || r.stationId === filter);
    document.getElementById('historyBody').innerHTML = renderHistoryRows(records);
}

function deleteRecord(stationId, date) {
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
        ราคาน้ำมันจะถูกบันทึกและใช้กับทุกรายการจนกว่าจะมีการแก้ไข<br>
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
document.addEventListener('DOMContentLoaded', () => {
    // Set current date display
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('th-TH', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            editingRecord = null;
            navigateTo(link.dataset.page);
        });
    });

    // Sidebar toggle
    document.getElementById('sidebarOpen').addEventListener('click', () => {
        document.getElementById('sidebar').classList.add('open');
    });
    document.getElementById('sidebarClose').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
    });

    // Render initial page
    navigateTo('dashboard');
});
