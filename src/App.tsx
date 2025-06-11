import { useState } from "react";
import MainContainer from "./components/MainContainer";
import QRCode from "./components/QRCode";
import Slider from "./components/Slider";
import SubmitButton from "./components/SubmitButton";
import Title from "./components/Title";
import QRCodeLink from "./components/QRCodeLink";
import { stringToBase64 } from "./base64";

interface SliderValues {
  minutes: number;
  hours: number;
  days: number;
}

export interface SliderProps {
  label: string;
  min: number;
  max: number;
  default: number;
}

const MINUTES: SliderProps = {
  label: "minutes",
  min: 0,
  max: 60,
  default: 0,
} as const;

const HOURS: SliderProps = {
  label: "hours",
  min: 0,
  max: 60,
  default: 0,
} as const;

const DAYS: SliderProps = {
  label: "days",
  min: 0,
  max: 365,
  default: 0,
} as const;

function App() {
  const [sliderValues, setSliderValues] = useState<SliderValues>({
    minutes: MINUTES.default,
    hours: HOURS.default,
    days: DAYS.default,
  });

  const [qrCodeValue, setQrCodeValue] = useState("");

  function handleClick() {
    const sliderValuesString = JSON.stringify(sliderValues);
    const sliderValuesBase64String = stringToBase64(sliderValuesString);
    setQrCodeValue(sliderValuesBase64String);
    // TESTING !!!!!!!!
    // const testString = base64ToString(sliderValuesBase64String)
    // console.log(sliderValuesBase64String, testString)
    // TESTING !!!!!!!!
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    sliderName: keyof SliderValues,
  ) {
    const newValue = parseInt(e.target.value, 10);
    setSliderValues((prevValues) => ({
      ...prevValues,
      [sliderName]: newValue,
    }));
  }

  const sliderConfigs = [
    {
      key: "minutes" as const,
      config: MINUTES,
    },
    { key: "hours" as const, config: HOURS },
    { key: "days" as const, config: DAYS },
  ];

  return (
    <MainContainer>
      <Title />
      <QRCode value={qrCodeValue} />
      <div id="sliderAndButtonContent">
        {sliderConfigs.map((entry) => (
          <div key={entry.key}>
            <Slider
              props={entry.config}
              value={sliderValues[entry.key]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, entry.key)
              }
            />
          </div>
        ))}
        <SubmitButton onClick={handleClick} />
      </div>
      <QRCodeLink URI={qrCodeValue} />
    </MainContainer>
  );
}

export default App;
