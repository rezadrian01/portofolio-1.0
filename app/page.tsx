import TextType from "@/components/TextType";


const HomePage = () => {
  return (
    <div>
      <TextType
        text={[
          "Hello, I'm Ahmad Reza Adrian",
          "I'm a Software Engineer",
          "I love building web applications",
        ]}
        typingSpeed={75}
        pauseDuration={2500}
        showCursor={true}
        cursorCharacter="|"
      />
    </div>
  )
}

export default HomePage
