(function ($) {
  "use strict";

  /*--
        Apex Charts
    -----------------------------------*/

  var options = {
    series: [
      {
        name: "TEAM C",
        type: "line",
        data: [0, 500, 50, 680, 210, 480, 310],
      },
    ],
    chart: {
      height: 370,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [3],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    markers: {
      size: 0,
    },
    colors: ["#309255"],
    xaxis: {
      categories: [
        ["Octâ€™20"],
        ["Novâ€™20"],
        ["Decâ€™20"],
        ["Janâ€™21"],
        ["Febâ€™21"],
        ["Marâ€™21"],
      ],
      labels: {
        style: {
          colors: ["#52565b"],
          fontSize: "14px",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      tickAmount: 7,
      min: 0,
      labels: {
        style: {
          colors: ["#52565b"],
          fontSize: "14px",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#uniqueReport"), options);
  chart.render();
})(jQuery);
