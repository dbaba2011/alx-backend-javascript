namespace Subjects {
  export class Java implements Teacher {
    // Add the experienceTeachingJava attribute
    public experienceTeachingJava?: number;

    public getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    public getAvailableTeacher(): string {
      if (this.experienceTeachingJava !== undefined) {
        return `Available Teacher: ${this.firstName}`;
      }
      return "No available teacher";
    }
  }
}
