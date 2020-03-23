const { mysql } = require('../../mysql')

async function listAction (ctx) {
  const { page } = ctx.query
  const SIZE = 5
  // 分页处理
  const data = await mysql('nideshop_topic')
    .column('id', 'title', 'price_info', 'subtitle', 'scene_pic_url')
    .limit(SIZE).offset((page - 1) * SIZE).select()

  const data1 = await mysql('nideshop_topic')
  .column('id', 'title', 'price_info', 'subtitle', 'scene_pic_url')
  .select()

  const total = parseInt(data1.length / SIZE)

  ctx.body = {
    page,
    total,
    data
  }
}

async function detailAction (ctx) {
  const { id } = ctx.query
  let listData = [], recommendList = []
  if (id) {
    listData = await mysql('nideshop_topic').where({ id }).select()
    recommendList = await mysql('nideshop_topic')
    .column('id', 'title', 'price_info', 'subtitle', 'scene_pic_url')
    .limit(4).select()
  }
  ctx.body = {
    listData: listData[0],
    recommendList
  }
}

module.exports = {
  listAction,
  detailAction
}