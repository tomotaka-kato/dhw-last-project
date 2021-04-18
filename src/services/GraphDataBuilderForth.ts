/**
 * 最初のプロジェクトの5月と6月、ラベル毎
 */
export const buildData = () => {
  return {
    labels: [
      // 軸ラベル
      // 各ラベルを配列にすることで軸ラベルが改行されて表示される
      ['新規機能開発'],
      ['バグフィックス'],
      ['新人実装'],
    ],
    datasets: [
      // 表示するデータセット
      {
        data: [130, 80, 100],
        backgroundColor: 'rgba(80, 80, 80, 1)', // <--追加
        label: '予定',
      },
      {
        data: [132, 75, 160],
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
            fontColor: 'white',
          },
          scaleLabel: {
            // 軸ラベル設定
            display: true,
            labelString: 'ラベル',
            fontColor: 'white',
          },
        },
      ],
      yAxes: [
        // y軸設定
        {
          scaleLabel: {
            display: true,
            labelString: '工数',
            fontColor: 'white',
          },
          ticks: {
            fontColor: 'white',
            //最大値最小値設定
            min: 0, //最小値
            max: 170, //最大値
            fontSize: 14, //フォントサイズ
            stepSize: 10, //軸間隔
          },
        },
      ],
    },
  };
};
