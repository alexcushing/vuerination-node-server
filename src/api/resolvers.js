import { Urinator } from './Models/Urinator.js'

export const resolvers = {
  Query: {
    urinators: () => Urinator.find(), // .find() etc is just using Mongoose mongodb ORM
    urinator: (_, args) => Urinator.findOne({name: args.name}),
  },
  Mutation: {
    addUrinator: async(_,{name, location, bio, img, shyness}) => {
      const person = new Urinator({
        name,
        location,
        bio,
        img,
        shyness,
        count: "0",
      });
      person.save();
      return person;
    },
    removeUrinator: async(_,{name}) => {
      const person = await Urinator.findOne({ name })
      person.deleted = true;
      person.save();
      return person;
    },
    addPee: async (_, {name}) => {
      let person = await Urinator.findOne({ name });
      person.count++;
      person.save();
      return person;
    },
    removePee: async (_, {name}) => {
      let person = await Urinator.findOne({ name });
      person.count--;
      person.save();
      return person;
    }
  }
}