import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { NumberCard, Quote, Sales, Weather, RecentSales, Comments, Completed, Browser, Cpu, User } from './components'
import styles from './index.less'
import { color } from '../../utils'





// const { weather, sales, quote, numbers,todo, recentSales, comments, completed, browser, cpu, user } = dashboard
// const { numbers,todo } = dashboard;

function Dashboard ({ dashboard }) {


    const numbers =[
        {
            icon: 'pay-circle-o',
            color: color.green,
            title: '创建项目',
            number: 2781,
        }, {
            icon: 'team',
            color: color.blue,
            title: '人员管理',
            number: 3241,
        }, {
            icon: 'message',
            color: color.purple,
            title: '项目管理',
            number: 253,
        }, {
            icon: 'shopping-cart',
            color: color.red,
            title: '我的账号',
            number: 4324,
        }, {
            icon: 'shopping-cart',
            color: color.red,
            title: '账号管理',
            number: 2655,
        }, {
            icon: 'shopping-cart',
            color: color.red,
            title: '注册',
            number: 9989,
        },{
            icon: 'shopping-cart',
            color: color.red,
            title: '注销登录',
            number: 9989,
        },
    ];
    const todo =[
        {
            icon: 'pay-circle-o',
            color: color.green,
            title: '待审项目',
            number: 99,
        }, {
            icon: 'team',
            color: color.blue,
            title: '公开请求',
            number: 0,
        }
    ];
  const numberCards = numbers.map((item, key) => <Col key={key} lg={6} md={12}>
    <NumberCard {...item} />
  </Col>)
  const todoCards = todo.map((item, key) => <Col key={key} lg={12} md={12}>
    <NumberCard {...item} />
  </Col>)


    // console.log(numberCards)
    // console.log(todoCards)
  return (
    <Row gutter={24}>
      <p className={styles.dash_margin}>代办事项</p>
      {todoCards}
      <p className={styles.dash_margin}>模块总览</p>
      {numberCards}
    </Row>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
}

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard)

// <Col lg={18} md={24}>
//   <Card bordered={false} bodyStyle={{
//   padding: '24px 36px 24px 0',
// }}>
// <Sales data={sales} />
//   </Card>
//   </Col>
// <Col lg={6} md={24}>
//   <Row gutter={24}>
//   <Col lg={24} md={12}>
//   <Card bordered={false} className={styles.weather} bodyStyle={{
//   padding: 0,
//     height: 204,
//     background: color.blue,
// }}>
// <Weather {...weather} />
// </Card>
// </Col>
// <Col lg={24} md={12}>
//   <Card bordered={false} className={styles.quote} bodyStyle={{
//   padding: 0,
//     height: 204,
//     background: color.peach,
// }}>
// <Quote {...quote} />
// </Card>
// </Col>
// </Row>
// </Col>
// <Col lg={12} md={24}>
//   <Card bordered={false} {...bodyStyle}>
// <RecentSales data={recentSales} />
//   </Card>
//   </Col>
//   <Col lg={12} md={24}>
//   <Card bordered={false} {...bodyStyle}>
// <Comments data={comments} />
//   </Card>
//   </Col>
//   <Col lg={24} md={24}>
//   <Card bordered={false} bodyStyle={{
//   padding: '24px 36px 24px 0',
// }}>
// <Completed data={completed} />
//   </Card>
//   </Col>
//   <Col lg={8} md={24}>
//   <Card bordered={false} {...bodyStyle}>
// <Browser data={browser} />
//   </Card>
//   </Col>
//   <Col lg={8} md={24}>
//   <Card bordered={false} {...bodyStyle}>
// <Cpu {...cpu} />
// </Card>
// </Col>
// <Col lg={8} md={24}>
//   <Card bordered={false} bodyStyle={{ ...bodyStyle.bodyStyle, padding: 0 }}>
// <User {...user} />
// </Card>
// </Col>
