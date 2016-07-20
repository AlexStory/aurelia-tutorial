export class Welcome {
  heading = 'welcome to arrelia';
  firstName = 'Alex';
  lastName = 'Story';
  txtToReverse = '';

  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }

  submit(){
    alert(`Welcome, ${this.fullName}!`)
  }
}
