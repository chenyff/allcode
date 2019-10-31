/*
Navicat MySQL Data Transfer

Source Server         : 微支付测试环境_library_rw
Source Server Version : 50616
Source Host           : rdsp5ae3ypidj48wkt2o.mysql.rds.aliyuncs.com:3306
Source Database       : library

Target Server Type    : MYSQL
Target Server Version : 50616
File Encoding         : 65001

Date: 2018-01-08 10:03:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `price` float NOT NULL,
  `detail` varchar(500) NOT NULL,
  `classify` varchar(20) NOT NULL,
  `status` varchar(2) NOT NULL,
  `number` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=276 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('152', '高效能人士的七个习惯', '100', 'SYF-GL-0001', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('153', '九型人格完全手册', '100', 'SYF-GL-0002', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('154', '别在吃苦的年纪选择安逸', '100', 'SYF-GL-0003', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('155', '我一开口，就能说服所有人', '100', 'SYF-GL-0004', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('156', '照着做，你就能掌控情绪', '100', 'SYF-GL-0005', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('157', '领导力21法则', '100', 'SYF-GL-0006', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('158', '人际交往心理学', '100', 'SYF-GL-0007', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('159', '有效的沟通技巧', '100', 'SYF-GL-0008', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('160', '世界顶级思维', '100', 'SYF-GL-0009', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('161', '麦肯锡问题分析与解决技巧', '100', 'SYF-GL-0010', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('162', '把时间当做朋友', '100', 'SYF-GL-0012', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('163', '引爆点', '100', 'SYF-GL-0013', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('164', '大开眼界', '100', 'SYF-GL-0014', '非专业', '01', '2');
INSERT INTO `goods` VALUES ('165', '逆转', '100', 'SYF-GL-0015', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('166', '眨眼之间', '100', 'SYF-GL-0016', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('167', '异类', '100', 'SYF-GL-0017', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('168', '一天一点社交训练', '100', 'SYF-GL-0018', '非专业', '01', '2');
INSERT INTO `goods` VALUES ('169', '一开口就让人喜欢你', '100', 'SYF-GL-0019', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('170', '穷查理宝典', '100', 'SYF-GL-0020', '非专业', '01', '2');
INSERT INTO `goods` VALUES ('171', '智能时代', '100', 'SYF-GL-0021', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('172', '2016办公应用从入门到精通', '100', 'SYF-GL-0022', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('173', '创业维艰', '100', 'SYF-GL-0023', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('174', '好好说话', '100', 'SYF-GL-0024', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('175', '理想乐观派', '100', 'SYF-GL-0025', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('176', '麦肯锡思维', '100', 'SYF-GL-0026', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('177', '麦肯锡极简工作法', '100', 'SYF-GL-0028', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('178', '小米生态链战地笔记', '100', 'SYF-GL-0029', '非专业', '01', '2');
INSERT INTO `goods` VALUES ('179', '鞋狗-耐克创始人自传', '99', 'SYF-GL-0030', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('180', '中层领导力', '99', 'SYF-GL-0031', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('181', '一本小小的蓝色逻辑书', '99', 'SYF-GL-0032', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('182', '影响力', '99', 'SYF-GL-0033', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('183', '沃顿商学院最受欢迎的谈判课', '99', 'SYF-GL-0034', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('184', '精力管理', '99', 'SYF-GL-0035', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('185', '拆解你的沟通能力1', '99', 'SYF-GL-0036', '非专业', '02', '2');
INSERT INTO `goods` VALUES ('186', '竞争优势', '99', 'SYF-GL-0037', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('187', '竞争战略', '99', 'SYF-GL-0038', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('188', '卓成有效的管理者', '99', 'SYF-GL-0039', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('189', '你一年的8760小时', '99', 'SYF-GL-0040', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('190', '别让情绪失控害了你', '99', 'SYF-GL-0041', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('191', '你的效率是整理出来的', '99', 'SYF-GL-0042', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('192', '未来简史', '99', 'SYF-GL-0043', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('193', '第五项修炼', '99', 'SYF-GL-0044', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('194', '金字塔原理1', '99', 'SYF-GL-0045', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('195', '金字塔原理2', '99', 'SYF-GL-0046', '非专业', '01', '2');
INSERT INTO `goods` VALUES ('196', '用梦想填平沟壑', '99', 'SYF-GL-0047', '非专业', '01', '2');
INSERT INTO `goods` VALUES ('197', '咨询的奥秘续', '99', 'SYF-GL-0048', '非专业', '02', '2');
INSERT INTO `goods` VALUES ('198', '部落一呼百应的力量', '99', 'SYF-GL-0049', '非专业', '02', '2');
INSERT INTO `goods` VALUES ('199', '拆解你的沟通力2', '99', 'SYF-GL-0050', '非专业', '02', '2');
INSERT INTO `goods` VALUES ('200', '人类简史', '99', 'SYF-GL-0051', '非专业', '01', '1');
INSERT INTO `goods` VALUES ('201', '精益创新', '99', 'SYF-GL-0053', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('202', '做最好的自己', '99', 'SYF-GL-0052', '非专业', '02', '2');
INSERT INTO `goods` VALUES ('203', '价值主张设计', '99', 'SYF-GL-0054', '非专业', '02', '1');
INSERT INTO `goods` VALUES ('204', 'HR转型突破', '1', 'SYF-ZY-0001', '专业', '02', '1');
INSERT INTO `goods` VALUES ('205', '上接战略，下接绩效，培训就该这样搞', '1', 'SYF-ZY-0002', '专业', '01', '1');
INSERT INTO `goods` VALUES ('206', '培训师21项技能修炼（精湛课程开发）上', '1', 'SYF-ZY-0003', '专业', '02', '1');
INSERT INTO `goods` VALUES ('207', '培训师21项技能修炼（精湛课程开发）下', '1', 'SYF-ZY-0004', '专业', '02', '1');
INSERT INTO `goods` VALUES ('208', '思维的笔记（上）', '1', 'SYF-ZY-0005', '专业', '01', '1');
INSERT INTO `goods` VALUES ('209', '思维的笔记（下）', '2', 'SYF-ZY-0006', '专业', '01', '1');
INSERT INTO `goods` VALUES ('210', '英文合同阅读技巧与分析', '3', 'SYF-ZY-0007', '专业', '01', '1');
INSERT INTO `goods` VALUES ('211', '公司治理与内部控制', '4', 'SYF-ZY-0008', '专业', '01', '1');
INSERT INTO `goods` VALUES ('212', '第三方支付技术与监管', '5', 'SYF-ZY-0009', '专业', '01', '1');
INSERT INTO `goods` VALUES ('213', '互联网金融风险控制', '6', 'SYF-ZY-0010', '专业', '01', '1');
INSERT INTO `goods` VALUES ('214', '跨境电商3.0时代', '7', 'SYF-ZY-0011', '专业', '01', '1');
INSERT INTO `goods` VALUES ('215', '蚂蚁金服', '8', 'SYF-ZY-0012', '专业', '01', '1');
INSERT INTO `goods` VALUES ('216', '世界秩序', '9', 'SYF-ZY-0013', '专业', '02', '1');
INSERT INTO `goods` VALUES ('217', '市场营销：原理与实践', '10', 'SYF-ZY-0014', '专业', '02', '1');
INSERT INTO `goods` VALUES ('218', '支付战争', '11', 'SYF-ZY-0015', '专业', '02', '1');
INSERT INTO `goods` VALUES ('219', '商业银行会计学', '12', 'SYF-ZY-0017', '专业', '01', '1');
INSERT INTO `goods` VALUES ('220', '人人都要有会计思维', '13', 'SYF-ZY-0018', '专业', '01', '1');
INSERT INTO `goods` VALUES ('221', '公司会计科目设置与账务处理解析', '14', 'SYF-ZY-0019', '专业', '02', '1');
INSERT INTO `goods` VALUES ('222', '互联网+供应链金融创新模式', '15', 'SYF-ZY-0021', '专业', '02', '1');
INSERT INTO `goods` VALUES ('223', '支付革命', '16', 'SYF-ZY-0022', '专业', '01', '1');
INSERT INTO `goods` VALUES ('224', 'FinTech与资产证券化', '11', 'SYF-ZY-0023', '专业', '02', '1');
INSERT INTO `goods` VALUES ('225', '电子支付与结算', '12', 'SYF-ZY-0024', '专业', '01', '1');
INSERT INTO `goods` VALUES ('226', '大数据日知录', '69', 'SYF-ZY-0025', '专业', '01', '1');
INSERT INTO `goods` VALUES ('227', '算法导论', '12', 'SYF-ZY-0026', '专业', '02', '1');
INSERT INTO `goods` VALUES ('228', '机器学习实战', '12', 'SYF-ZY-0028', '专业', '01', '1');
INSERT INTO `goods` VALUES ('229', 'Lucene实战', '11', 'SYF-ZY-0029', '专业', '01', '1');
INSERT INTO `goods` VALUES ('230', 'MySQL技术内幕', '159', 'SYF-ZY-0030', '专业', '01', '1');
INSERT INTO `goods` VALUES ('231', '深入理解Java虚拟机', '45', 'SYF-ZY-0031', '专业', '01', '1');
INSERT INTO `goods` VALUES ('232', 'Java多线程编程核心技术', '12', 'SYF-ZY-0032', '专业', '01', '1');
INSERT INTO `goods` VALUES ('233', 'Python基础教程', '45', 'SYF-ZY-0033', '专业', '01', '1');
INSERT INTO `goods` VALUES ('234', 'Hotspot实战', '15', 'SYF-ZY-0034', '专业', '01', '1');
INSERT INTO `goods` VALUES ('235', '分布式服务架构：原理、设计与实战', '45', 'SYF-ZY-0035', '专业', '01', '1');
INSERT INTO `goods` VALUES ('236', 'Spring Cloud 与Docker 微服务架构实战', '100', 'SYF-ZY-0036', '专业', '01', '1');
INSERT INTO `goods` VALUES ('237', '高性能MySQL', '15', 'SYF-ZY-0037', '专业', '01', '1');
INSERT INTO `goods` VALUES ('238', '图解HTTP', '78', 'SYF-ZY-0039', '专业', '01', '1');
INSERT INTO `goods` VALUES ('239', '微信小程序：开发入门及案例详解', '12', 'SYF-ZY-0040', '专业', '02', '1');
INSERT INTO `goods` VALUES ('240', 'Android高级进阶', '15', 'SYF-ZY-0042', '专业', '01', '1');
INSERT INTO `goods` VALUES ('241', 'Java性能优化权威指南', '16', 'SYF-ZY-0043', '专业', '01', '1');
INSERT INTO `goods` VALUES ('242', 'SWIFT进阶', '12', 'SYF-ZY-0041', '专业', '02', '1');
INSERT INTO `goods` VALUES ('243', '质量全面管控', '15', 'SYF-ZY-0044', '专业', '02', '1');
INSERT INTO `goods` VALUES ('244', '软件自动化测试开发', '12', 'SYF-ZY-0045', '专业', '01', '1');
INSERT INTO `goods` VALUES ('245', '数据库索引设计与优化', '15', 'SYF-ZY-0046', '专业', '01', '1');
INSERT INTO `goods` VALUES ('246', 'head first设计模式', '11', 'SYF-ZY-0047', '专业', '01', '1');
INSERT INTO `goods` VALUES ('247', 'excel 2010从入门到精通', '12', 'SYF-ZY-0048', '专业', '02', '1');
INSERT INTO `goods` VALUES ('248', '统计学', '15', 'SYF-ZY-0049', '专业', '02', '1');
INSERT INTO `goods` VALUES ('249', 'AngularJS高级程序设计', '15', 'SYF-ZY-0050', '专业', '02', '1');
INSERT INTO `goods` VALUES ('250', '客户服务与客户投诉，抱怨处理技巧', '15', 'SYF-ZY-0051', '专业', '02', '1');
INSERT INTO `goods` VALUES ('251', '上市公司执行企业会计准则案例解析', '15', 'SYF-ZY-0052', '专业', '01', '1');
INSERT INTO `goods` VALUES ('252', '初级会计实务', '15', 'SYF-ZY-0053', '专业', '01', '1');
INSERT INTO `goods` VALUES ('253', '商务英语全能王', '15', 'SYF-ZY-0054', '专业', '02', '1');
INSERT INTO `goods` VALUES ('254', '从零开始做运营', '78', 'SYF-ZY-0055', '专业', '02', '1');
INSERT INTO `goods` VALUES ('255', '互联网运营实战手册', '78', 'SYF-ZY-0056', '专业', '01', '1');
INSERT INTO `goods` VALUES ('256', '设计中的设计', '89', 'SYF-ZY-0057', '专业', '02', '1');
INSERT INTO `goods` VALUES ('257', 'SPSS 22.0统计分析 从入门到精通', '12', 'SYF-ZY-0058', '专业', '02', '1');
INSERT INTO `goods` VALUES ('258', '用户故事与敏捷方法', '23', 'SYF-ZY-0059', '专业', '02', '1');
INSERT INTO `goods` VALUES ('259', '系统之美，决策者的系统思考', '34', 'SYF-ZY-0060', '专业', '01', '1');
INSERT INTO `goods` VALUES ('260', 'Unix编程艺术', '45', 'SYF-ZY-0061', '专业', '02', '1');
INSERT INTO `goods` VALUES ('261', '赢在移动端 移动电商营销全攻略', '56', 'SYF-ZY-0062', '专业', '02', '1');
INSERT INTO `goods` VALUES ('262', 'Excel2010 人力资源与行政管理', '67', 'SYF-ZY-0063', '专业', '02', '1');
INSERT INTO `goods` VALUES ('263', '智慧运维实录', '91', 'SYF-ZY-0064', '专业', '02', '1');
INSERT INTO `goods` VALUES ('264', '响应式web设计', '78', 'SYF-ZY-0065', '专业', '02', '1');
INSERT INTO `goods` VALUES ('265', '特许经营学', '89', 'SYF-ZY-0066', '专业', '02', '1');
INSERT INTO `goods` VALUES ('266', 'backbone.js 应用程序开发', '11', 'SYF-ZY-0067', '专业', '02', '1');
INSERT INTO `goods` VALUES ('267', '员工培训管理实操 从新手到高手', '22', 'SYF-ZY-0068', '专业', '02', '1');
INSERT INTO `goods` VALUES ('268', '实现模式', '33', 'SYF-ZY-0069', '专业', '02', '1');
INSERT INTO `goods` VALUES ('269', '白帽子讲web安全', '44', 'SYF-ZY-0070', '专业', '01', '2');
INSERT INTO `goods` VALUES ('270', 'Redis实战', '55', 'SYF-ZY-0071', '专业', '01', '1');
INSERT INTO `goods` VALUES ('271', 'effective java 中文版', '66', 'SYF-ZY-0072', '专业', '01', '1');
INSERT INTO `goods` VALUES ('273', '进阶版零基础学UI', '12', 'SYF-ZY-0020', '专业', '01', '1');
INSERT INTO `goods` VALUES ('274', '数据结构与算法分析', '30', 'SYF-ZF-0038', '专业', '02', '1');
INSERT INTO `goods` VALUES ('275', '101条战地法则-小米生态链', '10', 'SYF-GL-0055', '专业', '02', '1');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `bookid` int(50) NOT NULL,
  `borrowtime` datetime NOT NULL,
  `username` varchar(50) CHARACTER SET utf8 NOT NULL,
  `bookname` varchar(50) DEFAULT NULL,
  KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('271', '2017-10-26 14:36:00', '陈宇飞', 'effective java 中文版');
INSERT INTO `users` VALUES ('273', '2017-11-02 11:46:00', '武一凡', '进阶版零基础学UI');
INSERT INTO `users` VALUES ('205', '2017-11-09 15:43:00', '孙婷婷', '上接战略，下接绩效，培训就该这样搞');
INSERT INTO `users` VALUES ('208', '2017-11-09 16:51:00', '贾茹慧', '思维的笔记（上）');
INSERT INTO `users` VALUES ('271', '2017-11-09 16:54:00', '任黄彬', 'effective java 中文版');
INSERT INTO `users` VALUES ('270', '2017-11-09 16:55:00', '赵建国', 'Redis实战');
INSERT INTO `users` VALUES ('269', '2017-11-09 16:55:00', '黄艳青', '白帽子讲web安全');
INSERT INTO `users` VALUES ('259', '2017-11-09 16:56:00', '葛焕生', '系统之美，决策者的系统思考');
INSERT INTO `users` VALUES ('255', '2017-11-09 16:56:00', '沙立斌', '互联网运营实战手册');
INSERT INTO `users` VALUES ('252', '2017-11-09 16:57:00', '高嘉鞠', '初级会计实务');
INSERT INTO `users` VALUES ('251', '2017-11-09 16:58:00', '李硕', '上市公司执行企业会计准则案例解析');
INSERT INTO `users` VALUES ('246', '2017-11-09 16:59:00', '赵洪春', 'head first设计模式');
INSERT INTO `users` VALUES ('245', '2017-11-09 16:59:00', '吴晗达', '数据库索引设计与优化');
INSERT INTO `users` VALUES ('244', '2017-11-09 16:59:00', '刘伯彦', '软件自动化测试开发');
INSERT INTO `users` VALUES ('243', '2017-11-09 17:00:00', '桑磊', '质量全面管控');
INSERT INTO `users` VALUES ('241', '2017-11-09 17:00:00', '王明凯', 'Java性能优化权威指南');
INSERT INTO `users` VALUES ('240', '2017-11-09 17:00:00', '常腾霄', 'Android高级进阶');
INSERT INTO `users` VALUES ('239', '2017-11-09 17:01:00', '程群忠', '微信小程序：开发入门及案例详解');
INSERT INTO `users` VALUES ('238', '2017-11-09 17:01:00', '杨建吉', '图解HTTP');
INSERT INTO `users` VALUES ('237', '2017-11-09 17:04:00', '万昆', '高性能MySQL');
INSERT INTO `users` VALUES ('236', '2017-11-09 17:04:00', '王深圳', 'Spring Cloud 与Docker 微服务架构实战');
INSERT INTO `users` VALUES ('235', '2017-11-09 17:04:00', '李琳', '分布式服务架构：原理、设计与实战');
INSERT INTO `users` VALUES ('234', '2017-11-09 17:04:00', '刘杨', 'Hotspot实战');
INSERT INTO `users` VALUES ('233', '2017-11-09 17:05:00', '孔乐', 'Python基础教程');
INSERT INTO `users` VALUES ('232', '2017-11-09 17:05:00', '李康', 'Java多线程编程核心技术');
INSERT INTO `users` VALUES ('231', '2017-11-09 17:05:00', '胡文森', '深入理解Java虚拟机');
INSERT INTO `users` VALUES ('230', '2017-11-09 17:06:00', '李敬波', 'MySQL技术内幕');
INSERT INTO `users` VALUES ('229', '2017-11-09 17:06:00', '赵林', 'Lucene实战');
INSERT INTO `users` VALUES ('228', '2017-11-09 17:06:00', '国华', '机器学习实战');
INSERT INTO `users` VALUES ('226', '2017-11-09 17:13:00', '王振雷', '大数据日知录');
INSERT INTO `users` VALUES ('223', '2017-11-09 17:14:00', '赵洪春', '支付革命');
INSERT INTO `users` VALUES ('220', '2017-11-09 17:15:00', '刘敏', '人人都要有会计思维');
INSERT INTO `users` VALUES ('219', '2017-11-09 17:15:00', '田彪', '商业银行会计学');
INSERT INTO `users` VALUES ('217', '2017-11-09 17:15:00', '黄进青', '市场营销：原理与实践');
INSERT INTO `users` VALUES ('216', '2017-11-09 17:16:00', '刘亮', '世界秩序');
INSERT INTO `users` VALUES ('215', '2017-11-09 17:16:00', '李伟贺', '蚂蚁金服');
INSERT INTO `users` VALUES ('214', '2017-11-09 17:16:00', '黄进青', '跨境电商3.0时代');
INSERT INTO `users` VALUES ('213', '2017-11-09 17:17:00', '常军辉', '互联网金融风险控制');
INSERT INTO `users` VALUES ('212', '2017-11-09 17:17:00', '肖红', '第三方支付技术与监管');
INSERT INTO `users` VALUES ('211', '2017-11-09 17:17:00', '卢江玲', '公司治理与内部控制');
INSERT INTO `users` VALUES ('210', '2017-11-09 17:20:00', '芦江玲', '英文合同阅读技巧与分析');
INSERT INTO `users` VALUES ('209', '2017-11-09 17:20:00', '芦江玲', '思维的笔记（下）');
INSERT INTO `users` VALUES ('194', '2017-11-09 17:22:00', '孙红梅', '金字塔原理1');
INSERT INTO `users` VALUES ('191', '2017-11-09 17:22:00', '杨雪', '你的效率是整理出来的');
INSERT INTO `users` VALUES ('190', '2017-11-09 17:23:00', '郭溪林', '别让情绪失控害了你');
INSERT INTO `users` VALUES ('189', '2017-11-09 17:23:00', '张媛', '你一年的8760小时');
INSERT INTO `users` VALUES ('187', '2017-11-09 17:26:00', '熊盼明', '竞争战略');
INSERT INTO `users` VALUES ('186', '2017-11-09 17:27:00', '渠贺斌', '竞争优势');
INSERT INTO `users` VALUES ('183', '2017-11-09 17:28:00', '韩霏', '沃顿商学院最受欢迎的谈判课');
INSERT INTO `users` VALUES ('182', '2017-11-09 17:29:00', '李梦', '影响力');
INSERT INTO `users` VALUES ('181', '2017-11-09 17:29:00', '杨冰', '一本小小的蓝色逻辑书');
INSERT INTO `users` VALUES ('177', '2017-11-09 17:39:00', '吕海峰', '麦肯锡极简工作法');
INSERT INTO `users` VALUES ('176', '2017-11-09 17:39:00', '唐天添', '麦肯锡思维');
INSERT INTO `users` VALUES ('179', '2017-11-09 17:40:00', '刘亮', '鞋狗-耐克创始人自传');
INSERT INTO `users` VALUES ('171', '2017-11-09 17:40:00', '喻争志', '智能时代');
INSERT INTO `users` VALUES ('169', '2017-11-09 17:40:00', '司冉', '一开口就让人喜欢你');
INSERT INTO `users` VALUES ('167', '2017-11-09 17:41:00', '刘玲', '异类');
INSERT INTO `users` VALUES ('166', '2017-11-09 17:41:00', '郭濛濛', '眨眼之间');
INSERT INTO `users` VALUES ('165', '2017-11-09 17:41:00', '任黄彬', '逆转');
INSERT INTO `users` VALUES ('163', '2017-11-09 17:41:00', '陈兆雄', '引爆点');
INSERT INTO `users` VALUES ('160', '2017-11-09 17:42:00', '李精彪', '世界顶级思维');
INSERT INTO `users` VALUES ('158', '2017-11-09 17:42:00', '王梦圆', '人际交往心理学');
INSERT INTO `users` VALUES ('157', '2017-11-09 17:44:00', '张兰英', '领导力21法则');
INSERT INTO `users` VALUES ('154', '2017-11-09 17:45:00', '李格', '别在吃苦的年纪选择安逸');
INSERT INTO `users` VALUES ('153', '2017-11-09 17:45:00', '段小宁', '九型人格完全手册');
INSERT INTO `users` VALUES ('152', '2017-11-09 17:45:00', '孙红梅', '高效能人士的七个习惯');
INSERT INTO `users` VALUES ('200', '2017-11-10 10:01:00', '盛夏', '人类简史');
INSERT INTO `users` VALUES ('164', '2017-11-10 10:00:00', '李格', '大开眼界');
INSERT INTO `users` VALUES ('154', '2017-11-10 10:00:00', '杨冰', '别在吃苦的年纪选择安逸');
INSERT INTO `users` VALUES ('232', '2017-11-10 10:08:00', '赵林', 'Java多线程编程核心技术');
INSERT INTO `users` VALUES ('159', '2017-11-10 10:32:00', '汪佩樽', '有效的沟通技巧');
INSERT INTO `users` VALUES ('184', '2017-11-10 14:32:00', '武晋萌', '精力管理');
INSERT INTO `users` VALUES ('161', '2017-11-10 14:32:00', '武晋萌', '麦肯锡问题分析与解决技巧');
INSERT INTO `users` VALUES ('254', '2017-11-10 14:32:00', '武晋萌', '从零开始做运营');
INSERT INTO `users` VALUES ('173', '2017-11-13 14:16:00', '郭溪林', '创业维艰');
INSERT INTO `users` VALUES ('275', '2017-11-13 14:26:00', '张椿国', '101条战地法则-小米生态链');
INSERT INTO `users` VALUES ('181', '2017-11-13 14:27:00', '方圆', '一本小小的蓝色逻辑书');
INSERT INTO `users` VALUES ('175', '2017-11-13 14:27:00', '李硕', '理想乐观派');
INSERT INTO `users` VALUES ('168', '2017-11-14 14:32:00', '吕海峰', '一天一点社交训练');
INSERT INTO `users` VALUES ('188', '2017-11-15 14:56:00', '高嘉鞠', '卓成有效的管理者');
INSERT INTO `users` VALUES ('155', '2017-11-17 15:30:00', '闫丽苹', '我一开口，就能说服所有人');
INSERT INTO `users` VALUES ('225', '2017-11-22 13:03:00', '贾茹慧', '电子支付与结算');
INSERT INTO `users` VALUES ('196', '2017-11-24 09:59:00', '陈宇飞', '用梦想填平沟壑');
INSERT INTO `users` VALUES ('170', '2017-12-05 14:53:00', '刘亮', '穷查理宝典');
INSERT INTO `users` VALUES ('185', '2017-12-05 14:54:00', '张椿国', '拆解你的沟通能力1');
INSERT INTO `users` VALUES ('197', '2017-12-05 14:54:00', '方圆', '咨询的奥秘续');
INSERT INTO `users` VALUES ('198', '2017-12-05 14:54:00', '李格', '部落一呼百应的力量');
INSERT INTO `users` VALUES ('199', '2017-12-05 14:55:00', '闫丽苹', '拆解你的沟通力2');
INSERT INTO `users` VALUES ('202', '2017-12-05 14:55:00', '杨冰', '做最好的自己');
INSERT INTO `users` VALUES ('178', '2018-01-03 14:32:00', '李格', '小米生态链战地笔记');
INSERT INTO `users` VALUES ('164', '2018-01-03 14:32:00', '方圆', '大开眼界');
INSERT INTO `users` VALUES ('269', '2018-01-03 14:33:00', '杨冰', '白帽子讲web安全');
INSERT INTO `users` VALUES ('195', '2018-01-03 14:33:00', '张椿国', '金字塔原理2');
INSERT INTO `users` VALUES ('168', '2018-01-03 14:36:00', '闫立苹', '一天一点社交训练');
