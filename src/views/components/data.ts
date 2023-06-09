/**
 * 组件列表
 *
 * @author Junpeng.Li
 * @date 2023-06-09 22:44
 */

export type LanguageType = 'html' | 'css' | 'js' | 'ts' | 'vue2' | 'vue3'

export interface WebComponent {
  // 组件名
  name: string
  // 如果是转载，请注明转载地址
  from?: string
  // 使用什么语言开发的
  languages: LanguageType[],
  // 代码在线预览地址
  onlineCodeUrl: string,
  // 缩略图文件名称（包含扩展名，路径为项目根目录/public/assets/images/component-thumb）
  thumbImageName: string
}

export const components: WebComponent[] = [
  {
    name: '流光卡片',
    languages: ['html', 'css'],
    from: '抖音: https://www.douyin.com/video/7240724133871504698',
    onlineCodeUrl: 'https://runjs.work/projects/c8c3af0ff37c4026',
    thumbImageName: 'streamer-card.png'
  },
  {
    name: '爱你的心',
    languages: ['html', 'css'],
    from: '抖音：https://www.douyin.com/video/7238814874854362425',
    onlineCodeUrl: 'https://runjs.work/projects/5b106c514d154570',
    thumbImageName: 'love-you-heart.png'
  },
  {
    name: '旋转菜单按钮',
    languages: ['html', 'css'],
    from: 'https://www.douyin.com/video/7238040415281106236',
    onlineCodeUrl: 'https://runjs.work/projects/f92f117fce9947c0',
    thumbImageName: 'rotate-menu-button.png'
  },
  {
    name: 'css animate 动画效果演示',
    languages: ['html', 'css'],
    onlineCodeUrl: 'https://runjs.work/projects/b1d020ef26554bf0',
    thumbImageName: 'css-animations-show-type.png'
  }
]
