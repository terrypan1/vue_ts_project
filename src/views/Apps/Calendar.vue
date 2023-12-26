<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

import { calenderHelpers } from './useHeadering';//使用BaseHeadering
import { card } from './useBaseBlock';//BaseBlock
// import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
// Helper variables
const fullCalendar = ref(null);
const inputAddEvent = ref<HTMLInputElement | null>(null)
interface Event {
  title: string
  start: Date
  allDay: boolean
}
interface DateClickArg {
  dateStr: string;
  date: Date;
  allDay: boolean;
}
interface EventDropInfo {
  event: {
    id: string | number;
    title: string;
    start: Date;
    end: Date;
    // ...其他可能的事件屬性
  };
  oldEvent: {
    start: Date;
    end: Date;
    // ...其他可能的事件屬性
  };
  delta: {
    // 描述日期改變的量
  };
  // ...其他可能的屬性
}
interface ExternalDropInfo {
  date: Date;           // 拖放事件的日期
  allDay: boolean;      // 事件是否為全天事件
  draggedEl: HTMLElement; // 被拖放的 HTML 元素
  // ...根據您使用的庫可能有其他屬性
}
// 設定日曆選項
const calendarOptions = reactive<any>({
  events: [] as Event[],
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
  firstDay: 1,
  editable: true,
  droppable: true,
  headerToolbar: {
    left: "title",
    right: "prev,next today dayGridMonth,timeGridWeek,timeGridDay,listWeek",
  },
  dateClick: handleDateClick,
  eventDrop: handleEventDrop,
  eventReceive: handleExternalDrop,
});
const calendarNewEvent = ref<string | null>(null);
const calendarNewEvents = reactive([
  {
    title: "Codename X",
    color: "info",
    backgroundColor: "rgb(206, 233, 240)"
  },
  {
    title: "Weekend Adventure",
    color: "success",
    backgroundColor: "rgb(224, 237, 207)"
  },
  {
    title: "Project Mars",
    color: "info",
    backgroundColor: "rgb(206, 233, 240)"
  },
  {
    title: "Meeting",
    color: "warning",
    backgroundColor: "rgb(251, 222, 206)"
  },
  {
    title: "Walk the dog",
    color: "success",
    backgroundColor: "rgb(224, 237, 207)"
  },
  {
    title: "Al schedule",
    color: "info",
    backgroundColor: "rgb(206, 233, 240)"
  },
  {
    title: "Cinema",
    color: "success",
    backgroundColor: "rgb(224, 237, 207)"
  },
  {
    title: "Project X",
    color: "danger",
    backgroundColor: "rgb(248, 212, 212)"
  },
  {
    title: "Skype Meeting",
    color: "warning",
    backgroundColor: "rgb(251, 222, 206)"
  },
]);
let date = new Date();

let y = date.getFullYear();
let m = date.getMonth();
let d = date.getDate();
calendarOptions.events = [
  {
    title: "Gaming Day",
    start: new Date(y, m, 1),
    allDay: true,
  },
  {
    title: "Skype Meeting",
    start: new Date(y, m, 3),
  },
  {
    title: "Project X",
    start: new Date(y, m, 9),
    end: new Date(y, m, 12),
    allDay: true,
    color: "#e04f1a",
  },
  {
    title: "Work",
    start: new Date(y, m, 17),
    end: new Date(y, m, 19),
    allDay: true,
    color: "#82b54b",
  },
  {
    id: 999,
    title: "Hiking (repeated)",
    start: new Date(y, m, d - 1, 15, 0),
  },
  {
    id: 999,
    title: "Hiking (repeated)",
    start: new Date(y, m, d + 3, 15, 0),
  },
  {
    title: "Landing Template",
    start: new Date(y, m, d - 3),
    end: new Date(y, m, d - 3),
    allDay: true,
    color: "#ffb119",
  },
  {
    title: "Lunch",
    start: new Date(y, m, d + 7, 15, 0),
    color: "#82b54b",
  },
  {
    title: "Coding",
    start: new Date(y, m, d, 8, 0),
    end: new Date(y, m, d, 14, 0),
  },
  {
    title: "Trip",
    start: new Date(y, m, 25),
    end: new Date(y, m, 27),
    allDay: true,
    color: "#ffb119",
  },
  {
    title: "Reading",
    start: new Date(y, m, d + 8, 20, 0),
    end: new Date(y, m, d + 8, 22, 0),
  },
  {
    title: "Follow us on Twitter",
    start: new Date(y, m, 22),
    allDay: true,
    url: "http://twitter.com/pixelcave",
    color: "#3c90df",
  },
];
// Add new event data to the calendar on date click
function handleDateClick(arg: DateClickArg) {
  if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
    calendarOptions.events.push({
      title: "New Event",
      start: arg.date,
      allDay: arg.allDay,
    });
  }
}

// When dropping an existing event to another date
function handleEventDrop(eventDropInfo: EventDropInfo) {
  window.console.log(eventDropInfo);
}

// When dropping an external event and is added to the calendar
function handleExternalDrop(info: ExternalDropInfo) {
  window.console.log(info);
}

// Add event form submission
function addNewEvent() {
  if (calendarNewEvent.value) {
    // Add the event to the draggable list
    calendarNewEvents.unshift({
      title: calendarNewEvent.value,
      color: "info",
      backgroundColor: "rgb(206, 233, 240)"//新增的
    });

    // Reset and focus the input
    calendarNewEvent.value = "";
    if (inputAddEvent.value) {
      inputAddEvent.value.focus();
    }
  }
}
onMounted(() => {
  const eventsElement = document.getElementById("js-events");

  if (eventsElement) {
    new Draggable(eventsElement, {
      itemSelector: ".js-event",
      eventData(eventEl: HTMLElement) {
        return {
          title: eventEl.textContent || '',
          backgroundColor: getComputedStyle(eventEl).color,
          borderColor: getComputedStyle(eventEl).color,
        };
      },
    });
  }
});

</script>
<template>
  <BaseHeadering :header=calenderHelpers></BaseHeadering>
  <div class="container mt-xl-5 mt-3 w-100">
    <div class="m-lg-5">
      <BaseBlock :show="card.show">
        <template #header>
          <div class="card-header border-0 fw-bolder"
            style="color:rgb(22, 26, 31);font-size:14px;letter-spacing:0.0625rem;line-height:1.75rem;">
            Calendar
          </div>
        </template>
        <template #content>
          <div>施工中...</div>
          <div class="container-fuild">
            <div class="row">
              <div class="col-md-8">
                <FullCalendar ref="fullCalendar" :options="calendarOptions" />
              </div>
              <div class="col-md-4">
                <form class="push" @submit.prevent="addNewEvent">
                  <div class="input-group mb-4">
                    <input type="text" class="form-control" placeholder="Add Event.." v-model="calendarNewEvent"
                      ref="inputAddEvent" />
                    <span class="input-group-text">
                      <i class="bi bi-plus-circle-fill"></i>
                    </span>
                  </div>
                </form>
                  <ul id="js-events" style="list-style: none;">
                    <li v-for="(event, index) in calendarNewEvents" :key="`events-${index}`">
                      <div class="js-event p-2 fs-sm fw-medium rounded mb-2" :class="`text-${event.color}`"
                        :style="{ backgroundColor: event.backgroundColor }">
                        {{ event.title }}
                      </div>
                    </li>
                  </ul>
                <div class="text-center">
                  <p class="fs-sm text-muted">
                    <i class="bi bi-arrows-move"></i> Drag and drop events on the calendar
                  </p>
                </div>
              </div>
            </div>
          </div>

        </template>
      </BaseBlock>
    </div>
  </div>
</template>
<style lang="scss">
.fc .fc-toolbar.fc-header-toolbar {
  .fc .fc-toolbar-title {
    font-size: 16px;
  }
}

.fc-scrollgrid-sync-inner {
  .fc-col-header-cell-cushion {
    //a標籤
    text-decoration: none;
    color: rgb(151, 161, 178);
  }
}

.fc-daygrid-day-frame {
  .fc-daygrid-day-top {
    .fc-daygrid-day-number {
      text-decoration: none;
      color: #000;
      font-weight: bold;
    }
  }
}
#js-events li {
  &:hover {
    cursor: move;
    transform: translateX(-2px);
  }
}

@media (max-width:1354px) {
  .fc .fc-toolbar.fc-header-toolbar {
    display: flex;
    flex-direction: column;

  }
}
</style>