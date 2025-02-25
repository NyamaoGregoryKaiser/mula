import { AnimatedTestimonials } from "@/components/AnimatedTestimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Mula has given me hope against the challenges of life. It's a game-changer for my financial well-being.",
      name: "Sarah Chen",
      designation: "Business Owner",
      src: "/lady_project_4.jpg",
    },
    {
      quote:
        "Mula has really helped me, I now feel I belong in the community.",
      name: "Michael Rodriguez",
      designation: "BodaBoda Rider",
      src: "/lady_project1.jpg",
    },
    {
      quote:
        "Mula has given me hope against the challenges of life.",
      name: "Emily Watson",
      designation: "Mama Mboga",
      src: "/lady_project_3.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Mama Mboga",
      src: "/lady_project_2.jpg",
    },
    {
      quote:
        "Mula has really helped me, I now feel I belong in the community.",
      name: "Lisa Thompson",
      designation: "Mama Mboga",
      src: "/lady_project_4.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
