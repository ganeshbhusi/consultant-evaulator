const profiles = [
  { name: "Alice", skills: "React, Node.js", experience: 5, location: "Bangalore" },
  { name: "Bob", skills: "Angular, PHP", experience: 4, location: "Hyderabad" },
  { name: "Charlie", skills: "Vue, Laravel", experience: 6, location: "Chennai" },
  { name: "Diana", skills: "React, Python", experience: 3, location: "Delhi" },
  { name: "Evan", skills: "Next.js, Go", experience: 7, location: "Pune" },

  { name: "Fahim", skills: "Java, Spring Boot", experience: 8, location: "Mumbai" },
  { name: "Gauri", skills: "Kotlin, Android", experience: 4, location: "Bangalore" },
  { name: "Harsh", skills: "Swift, iOS", experience: 5, location: "Delhi" },
  { name: "Isha", skills: "Python, Django", experience: 6, location: "Hyderabad" },
  { name: "Jatin", skills: "Ruby on Rails", experience: 7, location: "Kolkata" },

  { name: "Kavita", skills: "React Native, Flutter", experience: 3, location: "Pune" },
  { name: "Lakshay", skills: "C#, .NET", experience: 9, location: "Chennai" },
  { name: "Meera", skills: "PHP, WordPress", experience: 5, location: "Mumbai" },
  { name: "Nikhil", skills: "Angular, TypeScript", experience: 6, location: "Delhi" },
  { name: "Ojas", skills: "Go, Docker, Kubernetes", experience: 7, location: "Bangalore" },

  { name: "Pooja", skills: "Data Science, Python", experience: 4, location: "Hyderabad" },
  { name: "Quasar", skills: "Machine Learning, TensorFlow", experience: 5, location: "Chennai" },
  { name: "Rohit", skills: "React, GraphQL", experience: 3, location: "Pune" },
  { name: "Sanya", skills: "JavaScript, Node.js", experience: 6, location: "Mumbai" },
  { name: "Tara", skills: "DevOps, AWS", experience: 8, location: "Delhi" },

  { name: "Umesh", skills: "Java, Microservices", experience: 7, location: "Bangalore" },
  { name: "Vaishnavi", skills: "Flutter, Dart", experience: 3, location: "Hyderabad" },
  { name: "Wahid", skills: "PHP, Laravel", experience: 6, location: "Kolkata" },
  { name: "Xena", skills: "React, Redux", experience: 4, location: "Mumbai" },
  { name: "Yash", skills: "Vue, Nuxt.js", experience: 5, location: "Chennai" },

  { name: "Zara", skills: "Python, Flask", experience: 6, location: "Delhi" },
  { name: "Abhay", skills: "C++, Embedded Systems", experience: 9, location: "Pune" },
  { name: "Bhavna", skills: "JavaScript, React", experience: 5, location: "Bangalore" },
  { name: "Chirag", skills: "Node.js, Express", experience: 4, location: "Hyderabad" },
  { name: "Divya", skills: "Data Engineering, Spark", experience: 7, location: "Mumbai" },

  { name: "Esha", skills: "Angular, RxJS", experience: 3, location: "Chennai" },
  { name: "Farhan", skills: "Java, Hibernate", experience: 6, location: "Delhi" },
  { name: "Geeta", skills: "React Native, Expo", experience: 4, location: "Bangalore" },
  { name: "Hitesh", skills: "Python, Pandas", experience: 5, location: "Hyderabad" },
  { name: "Indira", skills: "Machine Learning, Scikit-learn", experience: 7, location: "Pune" },

  { name: "Jaya", skills: "PHP, Symfony", experience: 6, location: "Mumbai" },
  { name: "Karan", skills: "Go, REST APIs", experience: 8, location: "Delhi" },
  { name: "Lata", skills: "Vue.js, Vuex", experience: 4, location: "Chennai" },
  { name: "Manish", skills: "AWS, Terraform", experience: 7, location: "Bangalore" },
  { name: "Nina", skills: "React, Typescript", experience: 5, location: "Hyderabad" },

  { name: "Omkar", skills: "Java, Spring MVC", experience: 6, location: "Mumbai" },
  { name: "Parul", skills: "Ruby, Rails", experience: 4, location: "Pune" },
  { name: "Qasim", skills: "Docker, Kubernetes", experience: 7, location: "Delhi" },
  { name: "Rhea", skills: "Angular, Node.js", experience: 3, location: "Bangalore" },
  { name: "Sahil", skills: "Python, AI/ML", experience: 8, location: "Hyderabad" },
];


export const mockProfiles = Array.from({ length: profiles.length }).map((_, i) => ({
  id: i + 1,
  name: profiles[i].name,
  skills: profiles[i].skills,
  experience: profiles[i].experience,
  location: profiles[i].location
}));
