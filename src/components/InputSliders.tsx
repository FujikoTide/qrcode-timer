import MainContainer from '@/components/organisms/MainContainer'

/////////////////////////////////////////////////////////////
/////////// NEED TO CHANGE !!!! /////////////////////////////
/////////////////////////////////////////////////////////////
import Slider from '@/components/Slider'

export default function InputSliders() {
  return (
    <>
      <MainContainer>
        <div className="pb-5 text-center text-3xl font-bold text-orange-400 capitalize text-shadow-md text-shadow-neutral-800">
          QR Code Timer - Input Due Time
        </div>
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
      </MainContainer>
    </>
  )
}
