// 全てのプロジェクトの1年分
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
          210,
          250,
          217.5,
          208.5,
          220.5,
          250,
          263,
          210,
          250,
          229.5,
          256.5,
          245,
        ],
        backgroundColor: 'rgba(80, 80, 80, 1)', // <--追加
        label: '予定',
      },
      {
        data: [
          198,
          224,
          299.5,
          172.105,
          202.105,
          207,
          275,
          192,
          249,
          211.5,
          238.5,
          258.5,
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
            fontColor: 'white',
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
            fontColor: 'white',
          },
        },
      ],
    },
  };
};
