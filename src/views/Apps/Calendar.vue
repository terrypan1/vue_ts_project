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
  },
  {
    title: "Weekend Adventure",
    color: "success",
  },
  {
    title: "Project Mars",
    color: "info",
  },
  {
    title: "Meeting",
    color: "warning",
  },
  {
    title: "Walk the dog",
    color: "success",
  },
  {
    title: "Al schedule",
    color: "info",
  },
  {
    title: "Cinema",
    color: "success",
  },
  {
    title: "Project X",
    color: "danger",
  },
  {
    title: "Skype Meeting",
    color: "warning",
  },
]);
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
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Add Event.." v-model="calendarNewEvent"
                      ref="inputAddEvent" />
                    <span class="input-group-text">
                      <i class="fa fa-fw fa-plus-circle"></i>
                    </span>
                  </div>
                </form>
                <ul id="js-events" class="list list-events">
                  <li v-for="(event, index) in calendarNewEvents" :key="`events-${index}`">
                    <div class="js-event p-2 fs-sm fw-medium rounded"
                      :class="`bg-${event.color}-light text-${event.color}`">
                      {{ event.title }}
                    </div>
                  </li>
                </ul>
                <div class="text-center">
                  <p class="fs-sm text-muted">
                    <i class="fa fa-arrows-alt"></i> Drag and drop events on the
                    calendar
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
</style>