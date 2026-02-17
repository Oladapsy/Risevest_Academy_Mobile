interface Slide {
  id: string;
  title: string;
  image: any; 
  subtitle: string;
}
export const slides: Slide[] = [
  {
    id: "1",
    title: "Welcome to Grocerya",
    image: require("../images/onboarding/Full_Trolley.png"),
    subtitle:
      "Get your grocery needs at your service within a minute. fast, efficient, and convenient.",
  },
  {
    id: "2",
    title: "Get any packages delivered",
    image: require("../images/onboarding/Delivery_Truck.png"),
    subtitle:
      "Get all your items conveniently, ensuring everything you need arrive without any hassle.",
  },
  {
    id: "3",
    title: "Protected package delivery",
    image: require("../images/onboarding/Big_Box.png"),
    subtitle:
      "Your groceries are carefully packed to ensure they arrive safely and in perfect condition.",
  },
  {
    id: "4",
    title: "Best price guaranteed",
    image: require("../images/onboarding/Cash_Register.png"),
    subtitle:
      "Allowing you to stock up on your favorite items while staying within your budget.",
  },
];