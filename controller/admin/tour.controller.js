module.exports.list = async (req, res) => {
  res.render('admin/pages/tour-list', {
    pageTitle: "Quản lí Tour"
  })
}

module.exports.create = async (req, res) => {
  res.render('admin/pages/tour-create', {
    pageTitle: "Tạo Tour"
  })
}

module.exports.trash = async (req, res) => {
  res.render('admin/pages/tour-trash', {
    pageTitle: "Thùng rác"
  })
}

