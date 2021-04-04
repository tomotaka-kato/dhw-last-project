/**
 * 最初のプロジェクトの5月と6月
 */
export const buildData = () => {
  return {
    labels: [
      // 軸ラベル
      // 各ラベルを配列にすることで軸ラベルが改行されて表示される
      ['2020年', '5月'],
      ['2020年', '6月'],
    ],
    datasets: [
      // 表示するデータセット
      {
        data: [150, 117.5],
        backgroundColor: 'rgba(30, 144, 255, 1)', // <--追加
        label: '予定',
      },
      {
        data: [144, 219.5],
        backgroundColor: 'rgba(255, 144, 30, 1)', // <--追加
        label: '実績',
      },
    ],
  };
};

export const buildOption = () => {
  return {
    scales: {
      xAxes: [
        // x軸設定
        {
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
          scaleLabel: {
            display: true,
            labelString: '工数',
          },
          ticks: {
            //最大値最小値設定
            min: 0, //最小値
            max: 230, //最大値
            fontSize: 14, //フォントサイズ
            stepSize: 10, //軸間隔
          },
        },
      ],
    },
  };
};
