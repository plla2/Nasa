import { useState } from "react";
import Button from "../atoms/Button";
import InputField from "../atoms/InputField";
import Text from "../atoms/Text";

const Form = () => {
  const [heightValue, setHeightValue] = useState<string>("");
  const [weightValue, setWeightValue] = useState<string>("");
  const [bmiValue, setBmiValue] = useState<string | number>("");
  const [bmiMessage, setBmiMessage] = useState<string>("");

  const calculateBmi = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (heightValue && weightValue) {
      const heightInMeters: number = Number(heightValue) / 100;
      const bmi = (
        Number(weightValue) /
        (heightInMeters * heightInMeters)
      ).toFixed(2);
      setBmiValue(bmi);

      let message = "";
      if (Number(bmi) < 18.5) {
        message = "당신은 저체중입니다.";
      } else if (Number(bmi) >= 18.5 && Number(bmi) < 25) {
        message = "당신은 정상체중입니다.";
      } else if (Number(bmi) >= 25 && Number(bmi) < 30) {
        message = "당신은 과체중입니다.";
      } else {
        message = "당신은 비만입니다.";
      }
      setBmiMessage(message);
    }
    setHeightValue("");
    setWeightValue("");
  };

  return (
    <main>
      <InputField className="">
        <label htmlFor="height">Height</label>
        <div>
          <input
            type="number"
            name="height"
            id="height"
            value={heightValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setHeightValue(e.target.value)
            }
            placeholder="키를 입력해주세요."
          />
          <Text className="" as="span">
            cm
          </Text>
        </div>
      </InputField>
      <InputField className="">
        <label htmlFor="Weight">Weight</label>
        <div>
          <input
            type="number"
            name="weight"
            id="weight"
            value={weightValue}
            placeholder="몸무게를 입력해주세요."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWeightValue(e.target.value)
            }
          />
          <Text className="" as="span">
            kg
          </Text>
        </div>
      </InputField>
      <div>
        <Button onClick={calculateBmi} className="">
          BMI 계산하기
        </Button>
      </div>
      {bmiValue && (
        <div>
          <Text className="" as="h2">
            당신의 BMI는 {bmiValue}입니다.
          </Text>
          <Text className="" as="p">
            {bmiMessage}
          </Text>
        </div>
      )}
    </main>
  );
};

export default Form;
