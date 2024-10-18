import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Sign up or log in to Vercel",
      desc: "Go to Vercel's website and sign up for a new account or log in if you already have one.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Import your GitHub repository",
      desc: "Vercel will show you a list of your GitHub repositories. Find and select the repository containing your Next.js app.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Configure build settings (optional)",
      desc: "The Framework Preset is set to Next.js.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Set Up Automatic Deployments",
  desc: "Every time you push changes to the main branch of your repository, Vercel will automatically redeploy your application with the latest changes.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Add a custom domain (if desired)",
      desc: "In your Vercel dashboard, navigate to your project",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Add a custom domain (if desired)",
      desc: "Click on the Settings tab, then the Domains section",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
