import snowBg from "../assets/snow.jpg";
import hazeBg from "../assets/haze.jpg";
import clearBg from "../assets/clear.jpg";
import cloudBg from "../assets/clouds.jpg";
import rainBg from "../assets/rain.jpg";

export function getBackgroundImage(description) {
  if (description.includes('haze') || description.includes('fog') || description.includes('mist')) {
    return hazeBg;
  } else if (description.includes('clear')) {
    return clearBg;
  } else if (description.includes('snow')) {
    return snowBg;
  } else if (description.includes('rain') || description.includes('drizzle') || description.includes('thunderstorm')) {
    return rainBg;
  } else {
    return cloudBg;
  }
}