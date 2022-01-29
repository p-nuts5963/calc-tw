import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { Box, Container, Stack, Select, Center } from "@chakra-ui/react";
import AppCss from "./App.css";
import koyomi from "koyomi";

function App() {
  const containerStyle = {
    height: "30px",
  };

  // 営業日マップ
  const bizDayArray = [19, 18, 23, 20, 19, 22, 20, 22, 21, 20, 20, 22];

  // 年を取得
  const date = new Date();
  const year = date.getFullYear();

  // react-multi-date-picker
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate([today, tomorrow]));
  const [values, setValues] = useState([today, tomorrow]);

  const [selectedMonth, setSelectedMonth] = useState([]);
  const [bizDay, setBizDay] = useState([]);

  const handleMonth = (event) => {
    const newSelectedMonth = event.target.value;
    setSelectedMonth(newSelectedMonth);

    const newBizDay = bizDayArray[newSelectedMonth - 1];
    setBizDay(newBizDay);
  };
  return (
    <>
      <Center h={10} backgroundColor={"orange.100"}>
        {year}年テレワーク提出物のおもちゃ
      </Center>

      <Stack spacing={"5"} align={"center"}>
        <Select
          mt="3"
          placeholder="月を選択"
          w="200px"
          onChange={(e) => handleMonth(e)}
        >
          <option value="1">1月</option>
          <option value="2">2月</option>
          <option value="3">3月</option>
          <option value="4">4月</option>
          <option value="5">5月</option>
          <option value="6">6月</option>
          <option value="7">7月</option>
          <option value="8">8月</option>
          <option value="9">9月</option>
          <option value="10">10月</option>
          <option value="11">11月</option>
          <option value="12">12月</option>
        </Select>
        <Box>
          {selectedMonth}月の営業日は{bizDay}日です
        </Box>
        <Box mt="3">
          <DatePicker
            sort={true}
            multiple
            value={values}
            onChange={setValues}
            format="D"
            style={{
              height: "40px",
              backgroundColor: "aliceblue",
              padding: "10px",
            }}
          />
        </Box>
      </Stack>
    </>
  );
}

export default App;
