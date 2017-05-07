import Vue from 'vue';

class Event {
  constructor(name) {
    this.evt_name = name;
    this.event = new Vue();
  }

  send(evt_data) {
    return this.event.$emit(this.evt_name, evt_data);
  }

  listen() {
    return this.event.$on(this.evt_name);
  }

  turnOff() {
    return this.event.$off(this.evt_name);
  }
}