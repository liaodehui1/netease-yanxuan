const { mysql } = require('../../mysql')

async function categoryNav (ctx) {
  const { id } = ctx.query
  // 获取分类
  const currentNav = await mysql('nideshop_category').where({ id }).select()

  // 获取他的同类
  const navData = await mysql('nideshop_category').where({
    'parent_id': currentNav[0].parent_id
  }).select()

  ctx.body = {
    navData,
    currentNav: currentNav[0]
  }
}

// 分类页面
async function indexAction (ctx) {
  let { id: categoryId } = ctx.query
  const listData = await mysql('nideshop_category').where({
    'parent_id': 0
  }).select()
  categoryId = categoryId ? categoryId : listData[0].id
  let subList = []
  if (categoryId) {
    subList = await mysql('nideshop_category').where({
      'parent_id': categoryId
    }).select()
  }
  ctx.body = {
    categoryList: listData,
    subList
  }
}

module.exports = {
  categoryNav,
  indexAction
}