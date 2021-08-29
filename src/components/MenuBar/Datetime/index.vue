<template>
  <MenuItem>
    <div
      class="pl-2"
    >{{datetime.month}}月{{datetime.date}}日 {{datetime.day}} {{datetime.period}} {{datetime.hour}}:{{datetime.minute}}</div>
  </MenuItem>
</template>

<script>
import { defineComponent, onUnmounted, reactive } from 'vue';
import MenuItem from '../MenuItem.vue';
import { getDayPeriod, getWeekday } from '@/utils/date';
import { addLeadingZeros } from '@/utils/number';

export default defineComponent({
  components: { MenuItem },
  setup() {
    const datetime = reactive({
      date: 0,
      day: 0,
      month: 0,
      period: '',
      minute: 0,
      hour: 0,
    });

    const updateTime = () => {
      const date = new Date();

      datetime.month = date.getMonth();
      datetime.date = date.getDate();
      datetime.day = getWeekday(date);
      datetime.period = getDayPeriod(date);
      datetime.hour = date.getHours();
      datetime.minute = addLeadingZeros(date.getMinutes(), 2);
    };

    let interval = setInterval(updateTime, 1000);

    onUnmounted(() => clearInterval(interval));

    updateTime();

    return {
      datetime,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>