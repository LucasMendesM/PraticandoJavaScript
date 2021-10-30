// A palavra reservada THIS é uma referência de contexto.

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };


/*
Tem valores diferentes dependendo de onde é usado:

Em um método, thisrefere-se ao objeto proprietário .
Sozinho, thisrefere-se ao objeto global .
Em uma função, thisrefere-se ao objeto global .
Em uma função, no modo estrito, thisé undefined.
Em um evento, thisrefere-se ao elemento que recebeu o evento.
Os métodos gostam call()e apply()podem referir this- se a qualquer objeto .
*/