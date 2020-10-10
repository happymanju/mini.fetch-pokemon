(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n) {
      
      let data = fetch(`https://pokeapi.co/api/v2/pokemon?limit=${n}`)
      .then( (response) => {
        let js = response.json();
        return js;
      })
      .then( (js) => {
        console.log(Array.isArray(js.results));
        return js.results;
      })
      .then( (arrayOfPokeObjs) => {
        return arrayOfPokeObjs.map((poke) => { return poke.name})
      });

      return data;
    }

    // This should return an array of all the Pokemon that are under a particular weight.



    fetchOne(n) {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${n}`)
      .then((res) => {
        return res.json();
      })
    }

    findUnderWeight(weight) {
      // Your code here.
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API

      //fetch first ten pokemon
      let data = Promise.all([
          this.fetchOne(1),
          this.fetchOne(2),
          this.fetchOne(3),
          this.fetchOne(4),
          this.fetchOne(5),
          this.fetchOne(6),
          this.fetchOne(7),
          this.fetchOne(8),
          this.fetchOne(9),
          this.fetchOne(10),
        ])
        //at this point we have an array of objects
        //apply filter which returns a fresh array of objects
        .then( (arrayOfPokes) => {
          return arrayOfPokes.filter((poke) => {return poke.weight < weight})
        })
      //at this point, data is a Promise object containing an array of pokemon
      //we don't need to extract the array, because the test is expecting a Promise object with the answer inside.
      return data;
    }
  }

  window.Pokemonager = Pokemonager;
})();
