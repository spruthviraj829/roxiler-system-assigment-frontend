
const URL = "https://roxiler-system-assignment-backend.onrender.com";
export const fetchBarChartData = async(month)=>{
    try {
      const response = await fetch(`${URL}/api/v1/bar-chart/${month}`); // Replace with your API endpoint   
      const data =await response.json();
      return data ;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  export const fetchMonthData = async (month)=>{
    try {
      const response = await fetch(`${URL}/api/v1/get-month-data/${month}`);    
      const data =await response.json();
      return data ;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  export const fetchPieChartData = async (month)=>{
    try {
      const response = await fetch(`${URL}/api/v1/pie-chart/${month}`);   
      const data =await response.json();
      return data ;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  export const fetchMonthStatics = async(month)=>{
    try {
      const response = await fetch(`${URL}/api/v1/statictics/${month}`);   
      const data =await response.json();
      return data ;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }