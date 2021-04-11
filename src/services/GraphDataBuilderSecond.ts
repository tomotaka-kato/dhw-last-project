/**
 * 最初のプロジェクトの一年分
 */
export const buildData = () => {
  return {
    labels: [
      // 軸ラベル
      // 各ラベルを配列にすることで軸ラベルが改行されて表示される
      ['2020年', '4月'],
      ['2020年', '5月'],
      ['2020年', '6月'],
      ['2020年', '7月'],
      ['2020年', '8月'],
      ['2020年', '9月'],
      ['2020年', '10月'],
      ['2020年', '11月'],
      ['2020年', '12月'],
      ['2021年', ' 1月'],
      ['2021年', ' 2月'],
      ['2021年', ' 3月'],
    ],
    datasets: [
      // 表示するデータセット
      {
        data: [
          16,
          42,
          117.5,
          90.5,
          120.5,
          225,
          193,
          110,
          197,
          529.5,
          156.5,
          76.5,
        ],
        backgroundColor: 'rgba(80, 80, 80, 1)', // <--追加
        label: '予定',
      },
      {
        data: [
          118,
          144,
          219.5,
          92.105,
          122.105,
          327,
          295,
          212,
          299,
          631.5,
          258.5,
          178.5,
        ],
        backgroundColor: '#89c606', // <--追加
        label: '実績',
      },
    ],
  };
};

export const buildOption = () => {
  return {
    legend: {
      labels: {
        fontColor: 'white',
      },
    },
    scales: {
      xAxes: [
        // x軸設定
        {
          ticks: {
            fontColor: '#ccc',
          },
          scaleLabel: {
            // 軸ラベル設定
            display: true,
            labelString: '月',
          },
        },
      ],
      yAxes: [
        // y軸設定
        {
          ticks: {
            fontColor: '#ccc',
            min: 0, //最小値
            max: 300, //最大値
          },
          scaleLabel: {
            display: true,
            labelString: '工数',
          },
        },
      ],
    },
  };
};
