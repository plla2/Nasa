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
    <main className="w-full grid gap-6 pb-10 md:pb-0">
      <InputField className="w-full flex flex-col gap-2">
        <label
          htmlFor="height"
          className="uppercase text-sm text-zinc-200 font-bold"
        >
          Height
        </label>
        <div className="relative">
          <input
            type="number"
            name="height"
            id="height"
            value={heightValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setHeightValue(e.target.value)
            }
            placeholder="키를 입력해주세요."
            className="w-full h-12 pl-4 pr-8 text-zinc-400 transition-all duration-200 focus:border-amber-500 focus:outline-none border border-zinc-400 bg-transparent"
          />
          <Text
            className="absolute text-zinc-200 font-bold top-3 right-3"
            as="span"
          >
            cm
          </Text>
        </div>
      </InputField>
      <InputField className="w-full flex flex-col gap-2">
        <label
          htmlFor="Weight"
          className="text-sm font-bold uppercase text-zinc-200"
        >
          Weight
        </label>
        <div className="relative">
          <input
            type="number"
            name="weight"
            id="weight"
            value={weightValue}
            placeholder="몸무게를 입력해주세요."
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWeightValue(e.target.value)
            }
            className="w-full h-12 border border-zinc-400 pl-4 pr-8 transition-all duration-200 focus:border-amber-500 focus:outline-none text-zinc-400 bg-transparent"
          />
          <Text
            className="absolute top-3 right-3 text-zinc-200 font-bold"
            as="span"
          >
            kg
          </Text>
        </div>
      </InputField>
      <div className="w-full mt-4 flex justify-center">
        <Button
          onClick={calculateBmi}
          className="px-6 py-3 bg-gradient-to-r to-amber-500 from-red-500 text-zinc-200 text-sm uppercase font-semibold rounded-md"
        >
          BMI 계산하기
        </Button>
      </div>
      {bmiValue && (
        <div className="w-full flex flex-col p-4 bg-zinc-700">
          <Text className="text-zinc-200 text-lg" as="h2">
            당신의 BMI는 {bmiValue}입니다.
          </Text>
          <Text className="text-amber-500 mt-3" as="p">
            {bmiMessage}
          </Text>
        </div>
      )}
    </main>
  );
};

export default Form;
