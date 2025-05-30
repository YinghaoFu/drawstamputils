import { createI18n } from 'vue-i18n'

const messages = {
  zh: {
    menu: {
      home: '首页',
      about: '关于',
      contact: '联系我们'
    },
    legal: {
      title: '法律提示',
      warning: '请确认您已知悉并同意以下内容：',
      securityWarning: '安全警告',
      securityNotice: '本项目仅供学习和参考！严禁用于任何非法用途！',
      securityItems: '1. 本项目开源代码仅用于技术学习和交流。\n2. 使用本项目生成的任何图片请勿用于任何非法用途。\n3. 因违法使用本项目造成的任何法律责任和损失，需自行承担，与本项目无关。\n4. 如果使用本项目请遵守相关法律法规。',
      cancel: '取消',
      confirm: '我已知悉并同意'
    },
    stamp: {
      save: '保存印章',
      saveTemplate: '保存模板',
      loadTemplate: '加载模板',
      basic: {
        title: '印章基本设置',
        extractCircle: '提取圆形印章',
        width: '印章宽度 (mm)',
        height: '印章高度 (mm)',
        borderWidth: '圆形边框宽度 (mm)',
        color: '印章颜色'
      },
      company: {
        title: '公司名称列表设置',
        name: '公司名称',
        font: '字体',
        fontSize: '字体大小 (mm)',
        fontWeight: '字体粗细',
        compression: '压缩比例',
        distribution: '分布因子',
        margin: '边距 (mm)',
        startAngle: '起始角度 (°)',
        rotateDirection: '旋转方向',
        counterclockwise: '逆时针',
        clockwise: '顺时针'
      },
      stampType: {
        title: '印章类型列表设置',
        type: '文字内容',
        fontSize: '字体大小 (mm)',
        font: '字体',
        fontWeight: '字体粗细',
        compression: '压缩比例',
        letterSpacing: '字符间距 (mm)',
        verticalPosition: '垂直位置 (mm)',
        addNew: '添加新行',
        delete: '删除',
        line: '第 {index} 行'
      },
      star: {
        title: '五角星设置',
        enable: '绘制五角星',
        diameter: '五角星直径 (mm)',
        verticalPosition: '垂直位置 (mm)'
      },
      security: {
        title: '防伪纹路设置',
        enable: '启用防伪纹路',
        refresh: '刷新纹路',
        count: '纹路数量',
        length: '纹路长度 (mm)',
        width: '纹路宽度 (mm)'
      },
      roughEdge: {
        title: '毛边效果设置',
        enable: '启用毛边效果',
        width: '毛边宽度 (mm)',
        height: '毛边高度 (mm)',
        probability: '毛边概率',
        shift: '毛边偏移 (mm)',
        points: '毛边点数',
        refresh: '刷新毛边'
      },
      aging: {
        title: '做旧效果',
        enable: '启用做旧效果',
        manual: '手动做旧',
        intensity: '做旧强度',
        refresh: '刷新做旧'
      },
      extract: {
        title: '提取印章',
        tool: '提取印章工具'
      },
      template: {
        title: '常用模板',
        save: '保存当前为模板',
        defaultTitle: '默认模板',
        preview: '预览',
        name: '模板名称',
        open: '打开模板',
        load: '加载模板'
      },
      common: {
        line: '第 {index} 行',
        delete: '删除',
        addNew: '添加新行',
        fontPlaceholder: '输入字体名称',
        fontWeightNormal: '正常',
        fontWeightBold: '粗体',
        fontWeight: {
          normal: '正常',
          bold: '粗体',
          light: '细体',
          medium: '中等',
          semibold: '半粗'
        },
        compression: '压缩比例：{value}',
        distribution: '分布因子：{value}',
        letterSpacing: '字符间距：{value} mm',
        verticalPosition: '垂直位置：{value} mm',
        preview: '预览图片'
      },
      code: {
        title: '印章编码设置',
        code: '印章编码',
        font: '字体',
        fontSize: '字体大小 (mm)',
        fontWeight: '字体粗细',
        compression: '压缩比例',
        distribution: '分布因子',
        margin: '边距 (mm)'
      },
      taxNumber: {
        title: '中间数字设置',
        number: '数字',
        font: '字体',
        fontSize: '字体大小 (mm)',
        fontWeight: '字体粗细',
        compression: '压缩比例',
        letterSpacing: '字符间距 (mm)',
        verticalPosition: '垂直位置调整 (mm)'
      },
      images: {
        title: '图片列表设置',
        image: '图片 {index}',
        select: '选择图片',
        width: '图片宽度 (mm)',
        height: '图片高度 (mm)',
        positionX: '水平位置 (mm)',
        positionY: '垂直位置 (mm)',
        keepRatio: '保持宽高比',
        preview: '预览'
      },
      innerCircle: {
        addNew: '新增',
        title: '内圈圆形设置',
        lineWidth: '内圈圆线宽 (mm)',
        radiusX: '内圈圆半径X (mm)',
        radiusY: '内圈圆半径Y (mm)'
      },  
      outBorder: {
        enable: '显示外圈边框',
        lineWidth: '边框宽度 (mm)'
      },
      drag: {
        label: '移动印章'
      }
    }
  },
  en: {
    menu: {
      home: 'Home',
      about: 'About',
      contact: 'Contact'
    },
    legal: {
      title: 'Legal Notice',
      warning: 'Please confirm that you understand and agree to the following:',
      securityWarning: 'Security Warning',
      securityNotice: 'This project is for learning and reference only! It is strictly prohibited for any illegal use!',
      securityItems: '1. This project\'s open source code is only for technical learning and communication.\n2. Do not use any images generated by this project for any illegal purposes.\n3. You are responsible for any legal liability and losses caused by illegal use of this project.\n4. Please comply with relevant laws and regulations when using this project.',
      cancel: 'Cancel',
      confirm: 'I understand and agree'
    },
    stamp: {
      save: 'Save Stamp',
      saveTemplate: 'Save Template',
      loadTemplate: 'Load Template',
      basic: {
        title: 'Basic Stamp Settings',
        extractCircle: 'Extract Circle Stamp',
        width: 'Stamp Width (mm)',
        height: 'Stamp Height (mm)',
        borderWidth: 'Circle Border Width (mm)',
        color: 'Stamp Color'
      },
      company: {
        title: 'Company Name List Settings',
        name: 'Company Name',
        font: 'Font',
        fontSize: 'Font Size (mm)',
        fontWeight: 'Font Weight',
        compression: 'Compression Ratio',
        distribution: 'Distribution Factor',
        margin: 'Margin (mm)',
        startAngle: 'Start Angle (°)',
        rotateDirection: 'Rotate Direction',
        counterclockwise: 'Counter Clockwise',
        clockwise: 'Clockwise'
      },
      stampType: {
        title: 'Stamp Type List Settings',
        type: 'Text Content',
        fontSize: 'Font Size (mm)',
        font: 'Font',
        fontWeight: 'Font Weight',
        compression: 'Compression Ratio',
        letterSpacing: 'Letter Spacing (mm)',
        verticalPosition: 'Vertical Position (mm)',
        addNew: 'Add New',
        delete: 'Delete',
        line: 'Line {index}'
      },
      star: {
        title: 'Star Settings',
        enable: 'Draw Star',
        diameter: 'Star Diameter (mm)',
        verticalPosition: 'Vertical Position (mm)'
      },
      security: {
        title: 'Security Pattern Settings',
        enable: 'Enable Security Pattern',
        refresh: 'Refresh Pattern',
        count: 'Pattern Count',
        length: 'Pattern Length (mm)',
        width: 'Pattern Width (mm)'
      },
      roughEdge: {
        title: 'Rough Edge Settings',
        enable: 'Enable Rough Edge',
        width: 'Edge Width (mm)',
        height: 'Edge Height (mm)',
        probability: 'Edge Probability',
        shift: 'Edge Shift (mm)',
        points: 'Edge Points',
        refresh: 'Refresh Edge'
      },
      aging: {
        title: 'Aging Effect',
        enable: 'Enable Aging',
        manual: 'Manual Aging',
        intensity: 'Aging Intensity',
        refresh: 'Refresh Aging'
      },
      extract: {
        title: 'Extract Stamp',
        tool: 'Extract Stamp Tool'
      },
      template: {
        title: 'Common Templates',
        save: 'Save Current as Template',
        defaultTitle: 'Default Templates',
        preview: 'Preview',
        name: 'Template Name',
        open: 'Open Template',
        load: 'Load Template'
      },
      common: {
        line: 'Line {index}',
        delete: 'Delete',
        addNew: 'Add New',
        fontPlaceholder: 'Enter font name',
        fontWeightNormal: 'Normal',
        fontWeightBold: 'Bold',
        fontWeight: {
          normal: 'Normal',
          bold: 'Bold',
          light: 'Light',
          medium: 'Medium',
          semibold: 'Semi Bold'
        },
        compression: 'Compression: {value}',
        distribution: 'Distribution: {value}',
        letterSpacing: 'Letter Spacing: {value} mm',
        verticalPosition: 'Vertical Position: {value} mm',
        preview: 'Preview Image'
      },
      code: {
        title: 'Stamp Code Settings',
        code: 'Stamp Code',
        font: 'Font',
        fontSize: 'Font Size (mm)',
        fontWeight: 'Font Weight',
        compression: 'Compression Ratio',
        distribution: 'Distribution Factor',
        margin: 'Margin (mm)'
      },
      taxNumber: {
        title: 'Center Number Settings',
        number: 'Tax Number',
        font: 'Font',
        fontSize: 'Font Size (mm)',
        fontWeight: 'Font Weight',
        compression: 'Compression Ratio',
        letterSpacing: 'Letter Spacing (mm)',
        verticalPosition: 'Vertical Position (mm)'
      },
      images: {
        title: 'Image List Settings',
        image: 'Image {index}',
        select: 'Select Image',
        width: 'Image Width (mm)',
        height: 'Image Height (mm)',
        positionX: 'Horizontal Position (mm)',
        positionY: 'Vertical Position (mm)',
        keepRatio: 'Keep Aspect Ratio',
        preview: 'Preview'
      },
      innerCircle: {
        addNew: 'Add New',
        title: 'Inner Circle Settings',
        lineWidth: 'Circle Line Width (mm)',
        radiusX: 'Circle Radius X (mm)',
        radiusY: 'Circle Radius Y (mm)'
      },
      outBorder: {
        enable: 'Show Outer Border',
        lineWidth: 'Border Width (mm)'
      },
      drag: {
        label: 'Move Stamp'
      }
    }
  }
}

const i18n = createI18n({
  locale: 'zh', // 默认语言
  fallbackLocale: 'en', // 备用语言
  messages
})

export default i18n 