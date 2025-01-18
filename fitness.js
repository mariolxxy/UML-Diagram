// Base class representing a User
class User {
  // Static property to track the total number of members
  static totalMembers = 0;

  // Constructor for User instances
  constructor(memberId, name) {
    this.memberId = memberId; // Unique ID for the member
    this.name = name; // Name of the member
    this.classSchedule = [
      { day: "Monday", time: "2:00 PM", className: "Weight Training", trainer: "John" },
      { day: "Tuesday", time: "3:00 PM", className: "Strength Training", trainer: "Alice" }
    ];
    User.totalMembers++; // Increment total members whenever a new user is created
  }

  // Method to register a new member
  register() {
    console.log(`User ${this.name} has been registered with ID: ${this.memberId}.`);
  }

  // Method to view class schedule
  classScheduleDetails() {
    console.log(`Class schedule for ${this.name}:`);
    this.classSchedule.forEach(session => {
      console.log(`${session.day} at ${session.time}: ${session.className} (Trainer: ${session.trainer})`);
    });
  }

  // Static method to display total members
  static displayTotalMembers() {
    console.log(`Total users: ${User.totalMembers}`);
  }
}

// Example:
// Create a new user
const user1 = new User("U001", "John Doe");

// Register the user
user1.register(); // Output: User John Doe has been registered with ID: U001.

// Display class schedule for the user
user1.classScheduleDetails();
// Output:
// Class schedule for John Doe:
// Monday at 2:00 PM: Weight Training (Trainer: John)
// Tuesday at 3:00 PM: Strength Training (Trainer: Alice)

// Class Trainer which is a child of the User class
class Trainer extends User {
  constructor(memberId, name, specialty) {
    super(memberId, name); // Call the parent constructor
    this.specialty = specialty;
  }

  // Method to display trainer details
  displayTrainerDetails() {
    console.log(`Trainer ${this.name} (ID: ${this.memberId}) specializes in ${this.specialty}.`);
  }
}

// Example:
// Create a new trainer
const trainer1 = new Trainer("T001", "Mario", "Weight Training");
trainer1.displayTrainerDetails(); 
// Output: Trainer Mario (ID: T001) specializes in Weight Training.

// Class Trainee which is a child of the User class
class Trainee extends User {
  constructor(memberId, name, membershipPlan) {
    super(memberId, name); // Call the parent constructor
    this.membershipPlan = membershipPlan;
  }

  // Method to display trainee details
  displayTraineeDetails() {
    console.log(`Trainee ${this.name} (ID: ${this.memberId}) is on ${this.membershipPlan} plan.`);
  }

  // Method to renew Membership plan
  renewMembershipPlan(newPlan) {
    this.membershipPlan = newPlan;
    console.log(`Trainee ${this.name} (ID: ${this.memberId}) has renewed membership to ${this.membershipPlan} plan.`);
  }
}

// Example:
// Create a new trainee
const trainee1 = new Trainee("Tr001", "Alice", "Monthly");
trainee1.displayTraineeDetails(); 
// Output: Trainee Alice (ID: Tr001) is on Monthly plan.

trainee1.renewMembershipPlan("Annual"); 
// Output: Trainee Alice (ID: Tr001) has renewed membership to Annual plan.

// Class FitnessClass
class FitnessClass {
  static totalMembers = 0;
  static totalClasses = 0;

  // Constructor for fitness class instances
  constructor(classId, className, schedule, trainer) {
    this.classId = classId;
    this.className = className;
    this.schedule = schedule;
    this.trainer = trainer;
    FitnessClass.totalClasses++; // Increment total classes whenever a new class is created
  }

  // Method to schedule a class
  scheduleClass() {
    console.log(`Class ${this.className} has been scheduled on ${this.schedule} with trainer ${this.trainer}.`);
  }

  // Static method to display total classes
  static displayTotalClasses() {
    console.log(`Total classes scheduled: ${FitnessClass.totalClasses}`);
  }

  // Method to get fitness class details
  getClassDetails() {
    return `Class details: ${this.className}, Scheduled on: ${this.schedule}, Trainer: ${this.trainer}.`;
  }
}

// Example:
// Create a new fitness class
const yogaClass = new FitnessClass("F001", "Yoga", "2025-01-20 09:00 AM", "Mario");
yogaClass.scheduleClass();
// Output: Class Yoga has been scheduled on 2025-01-20 09:00 AM with trainer Mario.

FitnessClass.displayTotalClasses(); 
// Output: Total classes scheduled: 1.

// Define the MembershipPlan class
class MembershipPlan {
  // Constructor for MembershipPlan instances
  constructor(planId, planName, price) {
    this.planId = planId; // Unique ID for the membership plan
    this.planName = planName; // Name of the membership plan (e.g., "Monthly", "Annual")
    this.price = price; // Price of the membership plan
  }

  // Method to get details of the membership plan
  getPlanDetails() {
    return `Plan ID: ${this.planId}, Plan Name: ${this.planName}, Price: $${this.price}`;
  }

  // Method to update the membership plan details
  updatePlan(newPlanName, newPrice) {
    this.planName = newPlanName;
    this.price = newPrice;
    console.log(`Membership plan updated successfully.`);
  }
}

// Example:
// Create and update a membership plan
const monthlyPlan = new MembershipPlan("P001", "Monthly", 25);
console.log(monthlyPlan.getPlanDetails()); 
// Output: Plan ID: P001, Plan Name: Monthly, Price: $25.

monthlyPlan.updatePlan("Monthly Plus", 30); 
// Output: Membership plan updated successfully.

console.log(monthlyPlan.getPlanDetails()); 
// Output: Plan ID: P001, Plan Name: Monthly Plus, Price: $30.

// Display total users
User.displayTotalMembers(); 
// Output: Total users: 3.
