<template>
  <div  :style="{ height: (height || 25) + 'vh' }"></div>
</template>

<script>
import { Chart } from "@antv/g2";
// import Slider from "@antv/g2/lib/chart/controller/slider";

// registerComponentController("slider", Slider);

export default {
  name: "Box",
  data: () => ({
    chart: null,
  }),
  props: {
    data: Array,
    xKey: String,
    yKey: String,
    height: Number,
    legend: Array,
    legendKey: String,
    yTickCount: Number,
    xTickCount: Number,
  },
  mounted() {
    if (!this.data) return;

    let xKey =
      this.xKey ||
      Object.keys(this.data[0]).find(
        (key) => typeof this.data[0][key] == "string"
      );

    let yKey =
      this.yKey ||
      Object.keys(this.data[0]).find(
        (key) => typeof this.data[0][key] == "number"
      );

    this.drawChart(xKey, yKey);
  },
  methods: {
    drawChart(xKey, yKey) {
      this.chart = new Chart({
        container: this.$el,
        autoFit: true,
        height: this.height || 500,
        padding: [50 , 30],
      });
      this.chart.legend({
        position: "top",
      });
    //   this.chart.option("slider", {
    //     end: 1,
    //   });

      this.chart.data(this.data);
      this.chart.scale(yKey, { tickCount: this.yTickCount, nice: true });
      this.chart.scale(xKey, { tickCount: this.xTickCount, nice: true });

      if (this.legend)
        this.chart.scale(this.legendKey, {
          type: "cat",
          values: this.legend,
        });

      let limitPoint = [];

      this.chart
        .shape('box')
        .position(`${xKey}*${yKey}`)
        .style({stroke: '#613F75',fill: '#613F75',fillOpacity: 0.3})
        .tooltip('x*low*q1*median*q3*high', (x, low, q1, median, q3, high) => {
            return {
            name: x,
            low,
            q1,
            median,
            q3,
            high
            };
        })

      this.chart
        .point()
        .position(`${xKey}*${yKey}`)
        .color(this.legendKey || "")
        .style(`${xKey}*${yKey}`, (x, y) => {
          let isLimit = limitPoint.find(
            (data) => data[xKey] == x && data[yKey] == y
          );
          if (!isLimit) return { fillOpacity: 0, strokeOpacity: 0 };
          return;
        });

      this.chart.render();
    },
  },
};
</script>
