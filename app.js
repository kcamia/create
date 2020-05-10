// var ac = {
//   init : function () {
//      // ac.init() = start the alarm clock
//
//     // init current time
//     ac.currenthr = document.getElementById("current-hr");
//     ac.currentmin = document.getElementById("current-min");
//     ac.currentsec = document.getElementById("current-sec");
//
//     // init time selector
//     ac.timerhr = ac.createSel(23);
//     document.getElementById("pick-hr").appendChild(ac.timerhr);
//     ac.timermin = ac.createSel(59);
//     document.getElementById("pick-min").appendChild(ac.timermin);
//     ac.timersec = ac.createSel(59);
//     document.getElementById("pick-sec").appendChild(ac.timersec);
//
//     // init buttons
//     ac.set = document.getElementById("set");
//     ac.set.addEventListener("click", ac.set);
//     ac.reset = document.getElementById("reset");
//     ac.reset.addEventListener("click", ac.reset);
//
//     // init sound
//     ac.sound = document.getElementById("alarm-sound");
//
//     // start clock
//     ac.alarm = null;
//     setInterval(ac.tick, 1000);
//   },
//
//   createSel : function (max) {
//     // createSel() = create selcectors
//
//     var selector = document.createElement("select");
//     for (var i = 0; i <= max; i++) {
//       var option = document.createElement("option");
//       i = ac.padzero(i);
//       option.value = i;
//       option.innerHTML = i;
//       selector.appendChild(option);
//     }
//     return selector;
//   },
//
//   padzero : function (num) {
//     // padzero() = supports selectors, 0 if < 10
//
//     if (num < 10) {
//       num = "0" + num;
//     } else {
//       num = num.toString();
//     }
//     return num;
//   },
//
//   tick : function () {
//     // tick() = update current time
//
//     // current time
//     var now = new Date();
//     var hr = ac.padzero(now.getHours());
//     var min = ac.padzero(now.getMinutes());
//     var sec = ac.padzero(now.getSeconds());
//
//     // update clock
//     ac.currenthr.innerHTML = hr;
//     ac.currentmin.innerHTML = min;
//     ac.currentsec.innerHTML = sec;
//
//     // check and sound alarm
//     if (ac.alarm != null) {
//       now = hr + min + sec;
//       if (now == ac.alarm) {
//         document.getElementById("current-time".style.color = "red");
//         if (ac.sound.paused) {
//           ac.sound.play();
//         }
//       }
//     }
//
//   },
//
//   set : function () {
//     // set() = set alarm
//
//     ac.alarm = ac.timerhr.value + ac.timermin.value + ac.timersec.value;
//     ac.timerhr.disabled = true;
//     ac.timermin.disabled = true;
//     ac.timersec.disabled = true;
//     ac.set.disabled = true;
//     ac.reset.disabled = false;
//   },
//
//   reset : function () {
//     // reset() = reset alarm
//
//     if (!ac.sound.paused) {
//       ac.sound.pause();
//     }
//     ac.alarm = null;
//     ac.timerhr.disabled = false;
//     ac.timermin.disabled = false;
//     ac.timersec.disabled = false;
//     ac.set.disabled = false;
//     ac.reset.disabled = true;
//   }
// };
//
// window.addEventListener("load", ac.init);

var sound = new Audio();
sound.src = "alarm.mp3";

var ac = {
  init : function () {
  // ac.init() : start the alarm clock

    // Get the current time - hour, min, seconds
    ac.chr = document.getElementById("current-hr");
    ac.cmin = document.getElementById("current-min");
    ac.csec = document.getElementById("current-sec");

    // The time picker - Hr, Min, Sec
    ac.thr = ac.createSel(23);
    document.getElementById("pick-hr").appendChild(ac.thr);
    ac.thm = ac.createSel(59);
    document.getElementById("pick-min").appendChild(ac.thm);
    ac.ths = ac.createSel(59);
    document.getElementById("pick-sec").appendChild(ac.ths);

    // The time picker - Set, reset
    ac.tset = document.getElementById("set");
    ac.tset.addEventListener("click", ac.set);
    ac.treset = document.getElementById("reset");
    ac.treset.addEventListener("click", ac.reset);

    // The alarm sound
    // ac.sound = document.getElementById("alarm-sound");

    // Start the clock
    ac.alarm = null;
    setInterval(ac.tick, 1000);
  },

  createSel : function (max) {
  // createSel() : support function - creates a selector for hr, min, sec

    var selector = document.createElement("select");
    for (var i=0; i<=max; i++) {
      var opt = document.createElement("option");
      i = ac.padzero(i);
      opt.value = i;
      opt.innerHTML = i;
      selector.appendChild(opt);
    }
    return selector
  },

  padzero : function (num) {
  // ac.padzero() : support function - pads hr, min, sec with 0 if <10

    if (num < 10) { num = "0" + num; }
    else { num = num.toString(); }
    return num;
  },

  tick : function () {
  // ac.tick() : update the current time

    // Current time
    var now = new Date();
    var hr = ac.padzero(now.getHours());
    var min = ac.padzero(now.getMinutes());
    var sec = ac.padzero(now.getSeconds());

    // Update current clock
    ac.chr.innerHTML = hr;
    ac.cmin.innerHTML = min;
    ac.csec.innerHTML = sec;

    // Check and sound alarm
    if (ac.alarm != null) {
      now = hr + min + sec;
      if (now == ac.alarm) {
        document.getElementById("test".style.color = "red");
        if (sound.paused) {
          sound.play();
        }
      }
    }
  },

  set : function () {
  // ac.set() : set the alarm

    ac.alarm = ac.thr.value + ac.thm.value + ac.ths.value;
    ac.thr.disabled = true;
    ac.thm.disabled = true;
    ac.ths.disabled = true;
    ac.tset.disabled = true;
    ac.treset.disabled = false;
  },

  reset : function () {
  // ac.reset() : reset the alarm

    if (!sound.paused) {
      sound.pause();
    }
    ac.alarm = null;
    ac.thr.disabled = false;
    ac.thm.disabled = false;
    ac.ths.disabled = false;
    ac.tset.disabled = false;
    ac.treset.disabled = true;
  }
};

// INIT - RUN ALARM CLOCK
window.addEventListener("load", ac.init);
