// ============================================================
// 第二阶段 · CesiumJS 训练 · 共享配置
// 学生只需要改这一个文件
// ============================================================
window.CONFIG = {
  // Cesium Ion 访问令牌（免费注册：https://ion.cesium.com）
  // 不填也能跑（使用 Esri 卫星影像 + 平面地形）；
  // 但 Day2/Day3 的“真实 3D 地形高差 / DEM 高程着色”需要它。
  // 注册后把令牌字符串填到引号里即可，例如：'eyJhbGciOi...'
  cesiumIonToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6InlHTmNtWGpHXzdaZndnRGIiLCJqdGkiOiI3MWIzMWQ4YS01YjhiLTRkNzYtOTIwNy1iNjI4ZWQ4YjA0OGIiLCJpZCI6NDY4MTY5LCJpc3MiOiJodHRwczovL2FwaS5jZXNpdW0uY29tIiwiYXVkIjoidW5kZWZpbmVkX2RlZmF1bHQiLCJpYXQiOjE3ODY3NjA1NjN9.6DaTIwF9TOPRzQBqjRBPWKVLfNztnxicd2Pg_MLUQQM',

  // 目标山体：昭通·凤凰山（经度, 纬度）
  center: [103.700348,27.301878],

  // 山体名称（仅用于标题/标注）
  mountainName: '昭通·凤凰山',

  // 初始相机高度（米）
  initHeight: 9000,
};
