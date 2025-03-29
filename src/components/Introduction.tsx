import FontText from "./ui/FontText";
import JustifiedText from "./ui/JustifiedText";

const Introduction = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl md:mb-3 font-roboto">
        Fullstack JavaScript Developer
      </h1>
      <JustifiedText>
        <FontText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
          aliquam ex. Praesent tempor erat sit amet porta interdum. Proin
          lobortis consequat efficitur. Fusce hendrerit sem eget enim sodales
          feugiat. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </FontText>
        <FontText>
          Praesent ligula libero, scelerisque sed mollis sit amet, tempor ut
          ligula. Nunc sagittis facilisis sapien quis malesuada. Curabitur
          fermentum sapien volutpat laoreet vulputate. Phasellus dolor elit,
          eleifend id lectus ut, lobortis bibendum lorem. Vivamus faucibus augue
          in lectus laoreet, in gravida purus fermentum.
        </FontText>
        <FontText>
          Curabitur malesuada viverra lectus, ac mollis lectus ultrices eu. Cras
          faucibus iaculis magna in feugiat. Donec volutpat ultrices sem, nec
          efficitur est laoreet at. Maecenas vitae augue cursus, scelerisque
          massa sed, suscipit nisi.
        </FontText>
      </JustifiedText>
    </>
  );
};

export default Introduction;
