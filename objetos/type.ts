(() => {
  type Hero = {
    name: string;
    age: number;
    skills: string[];
    getName?: () => string;
  };

  let user: Hero = {
    name: "Marcos Diaz",
    age: 19,
    skills: ["js", "HTML", "CSS", "REACT", "NODE.JS", "EXPRESS.JS"],
    getName() {
      return this.name;
    },
  };

  let superman: Hero = {
    name: "Martha Diaz",
    age: 19,
    skills: ["pedagogia"]
  };
})();
