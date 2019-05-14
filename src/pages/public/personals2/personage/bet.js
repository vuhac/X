import moment from 'moment'

export default {
  Live: [
    {
      title: '游戏类型',
      align: 'center',
      key: 'platform',
      width: 90
    },
    {
      title: '订单编号',
      align: 'center',
      key: 'billNo',
      width: 230
    },
    {
      title: '投注时间',
      align: 'center',
      key: 'betTime',
      width: 150,
      render: (h, params) => {
        return h('div', [
          h(
            'span',
            moment.unix(params.row.betTime - 0).format('YYYY-MM-DD HH:mm:ss')
          )
        ])
      }
    },

    {
      title: '玩法',
      align: 'center',
      key: 'gameName'
    },
    {
      title: '投注内容',
      align: 'center',
      key: 'betInfo',
      render: (h, params) => {
        return h('div', [
          h(
            'span',
            params.row.betInfo ? params.row.betInfo : '- -'
          )
        ])
      },
      width: 180
    },
    {
      title: '投注金额',
      align: 'center',
      key: 'betAmount'
    },
    {
      title: '输赢',
      align: 'center',
      key: 'netAmount'
    }
  ],

  sport: [
    {
      title: '游戏类型',
      align: 'center',
      key: 'platform',
      width: 90
    },
    {
      title: '订单编号',
      align: 'center',
      key: 'billNo',
      width: 150,
    },
    {
      title: '投注时间',
      align: 'center',
      key: 'betTime',
      render: (h, params) => {
        return h('div', [
          h(
            'span',
            moment.unix(params.row.betTime - 0).format('YYYY-MM-DD HH:mm:ss')
          )
        ])
      },
      width: 150
    },

    {
      title: '投注内容',
      align: 'center',
      key: 'betInfo',
      width: 300,
      render: (h, params) => {
        let code = JSON.parse(params.row.betInfo);
        if (params.row.betInfo != null) {
          return h('div', [
            h(
              'div',
              code[0].hometeamname + 'VS' + code[0].awayteamname
            ),
            h(
              'div',
              code[0].bettypename
            ),
            h(
              'div',
              code[0].teambetname + `(赔率${code[0].odds})`
            )
          ])
        } else {
          return h('div', [
            h(
              'span',
              '- -'
            )
          ])
        }

      }
    },
    {
      title: '投注金额',
      align: 'center',
      key: 'betAmount'
    },

    {
      title: '输赢',
      align: 'center',
      key: 'netAmount'
    },
    {
      title: '状态',
      align: 'center',
      key: 'status',
      render: (h, params) => {
        let status

        switch (params.row.status) {
          case 0:
            status = '未结算'
            break
          case 1:
            status = '已结算'
            break
          case 2:
            status = '无效'
            break
        }
        return h('div', [

          h(
            'span',
            status
          )
        ])
      }
    }
  ],

  chess: [
    {
      title: '游戏类型',
      align: 'center',
      key: 'platform',

    },
    {
      title: '游戏名称',
      align: 'center',
      key: 'gameName',

    },
    {
      title: '订单编号',
      align: 'center',
      key: 'billNo',
      width: 200
    },

    {
      title: '投注时间',
      align: 'center',
      key: 'betTime',
      render: (h, params) => {
        return h('div', [
          h(
            'span',
            moment.unix(params.row.betTime - 0).format('YYYY-MM-DD HH:mm:ss')
          )
        ])
      }
    },
    {
      title: '下注内容',
      align: 'center',
      key: 'betInfo',
      render: (h, params) => {

        return h('div', [
            h(
              'span',
              '--'
            )
          ]
        )

      }
    },
    {
      title: '投注金额',
      align: 'center',
      key: 'betAmount'
    },
    {
      title: '输赢',
      align: 'center',
      key: 'netAmount'
    },
  ]

}
