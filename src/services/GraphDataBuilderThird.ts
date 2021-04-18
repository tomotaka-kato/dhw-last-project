/**
 * 最初のプロジェクトの5月と6月
 */
export const buildData = () => {
  return {
    labels: [
      // 軸ラベル
      // 各ラベルを配列にすることで軸ラベルが改行されて表示される
      ['2020年', '4月'],
      ['2020年', '5月'],
      ['2020年', '6月'],
    ],
    datasets: [
      // 表示するデータセット
      {
        data: [100, 170, 100.5],
        backgroundColor: 'rgba(80, 80, 80, 1)', // <--追加
        label: '予定',
      },
      {
        data: [98, 170, 180],
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
            fontColor: '#ccc',
          },
        },
      ],
      yAxes: [
        // y軸設定
        {
          scaleLabel: {
            display: true,
            labelString: '工数',
            fontColor: '#ccc',
          },
          ticks: {
            fontColor: '#ccc',
            //最大値最小値設定
            min: 0, //最小値
            max: 190, //最大値
            fontSize: 14, //フォントサイズ
            stepSize: 10, //軸間隔
          },
        },
      ],
    },
  };
};
