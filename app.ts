//Q13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation:string[] = ["Super star Scooty", "Civic Car", "Toyota LandCruiser"];
transportation.forEach(transport =>{
    console.log(`I would like to own a ${transport}`)
})
//Q14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest:string[] = ["Alice", "Eric", "Joe", "Martha", "David"];
guest.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join me for the dinner?`)
})
//Q15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a newset of invitations. You’ll have to think of someone else to invite.
 //• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
 //• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
 //• Print a second set of invitation messages, one for each person who is still in your list.
let guests:string[] = ["Alice", "Eric", "Joe", "Martha", "David"];
guests.forEach(guests =>{
    console.log(`Dear ${guests}, would you like to join me for the dinner?`)
})
let unableToAttend:string = "Joe";
console.log(`${unableToAttend} can't make it to dinner.`);
//replacing guest with a new one
let newGuest:string = "Daniel"
guests[guests.indexOf(unableToAttend)] = newGuest;
//New invitation
guests.forEach(guests =>{
    console.log(`Dear ${guests}, would you like to join me for dinner?`)})

