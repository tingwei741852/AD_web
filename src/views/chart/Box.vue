<template>
  <div></div>
</template>

<script>
import { Chart } from '@antv/g2'
import _ from 'lodash'
export default {
  name: 'G2Box',
  data: () => ({
    chart: null
  }),
  props: {
    data: Array,
    height: Number,
    xKey: String,
    yTickCount: Number
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart (legend) {
      this.chart = new Chart({
        container: this.$el,
        autoFit: true,
        height: this.height || 500,
        padding: [20, 50],
        defaultInteractions: [
          'tooltip',
          'active-region'
        ]
      })

      const data = _.cloneDeep(this.data).map((val) => {
        val.x = val[this.xKey]
        val.range = [val.min, val.q1, val.q2, val.q3, val.max]
        return val
      })

      // const theme = this.chart.getTheme()

      this.chart.data(data)
      this.chart.axis('range', { position: 'left' })
      this.chart.axis('outliers', false)
      this.chart.scale({
        range: {
          sync: true,
          nice: true,
          tickCount: this.yTickCount
        },
        outliers: {
          sync: 'range',
          nice: true,
          tickCount: this.yTickCount
        }
      })

      this.chart.tooltip({ showMarkers: false })

      this.chart
        .schema()
        .position('x*range')
        .shape('box')
        .color('#613F75')
        .tooltip('x*min*q1*q2*q3*max*outliers')
        .style(
          {
            stroke: '#613F75',
            fill: '#613F75',
            fillOpacity: 0.3
          }
        )
        .adjust('dodge')

      this.chart.render()
    }
  }
}
</script>
