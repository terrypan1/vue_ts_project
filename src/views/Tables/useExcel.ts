import * as XLSX from 'xlsx';
import jsonData from '../../data/usersDataset.json'

export const exportToExcel = () => {
    // 將 JSON 資料轉換成工作表
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    // 創建一個工作簿並添加工作表
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    // 生成 Excel 檔並觸發下載
    XLSX.writeFile(workbook, "Data.xlsx");
  };