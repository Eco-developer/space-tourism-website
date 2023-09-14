import { images } from "../../const/images";

export const Image = ({imageVariable}) => (
    <img
        alt={imageVariable}
        src={images[imageVariable]}
    />
)