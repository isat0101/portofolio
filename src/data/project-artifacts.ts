export type ProjectArtifact = {
  id: string;
  kind: "use-case" | "activity" | "sequence" | "interface" | "test" | "analysis" | "bpmn" | "data" | "design" | "ui" | "testing" | "method";
  titleId: string;
  titleEn: string;
  page?: number;
  figure?: string;
  group?: "account" | "dashboard" | "commodity" | "management" | "community" | "reports" | "items" | "orders" | "shipping" | "warehouse" | "incoming" | "outgoing" | "users" | "test-register" | "test-login" | "test-commodity" | "test-type" | "test-variety" | "test-product" | "test-user" | "test-forum" | "test-report" | "test-items" | "test-orders" | "test-shipping" | "test-warehouse" | "test-incoming" | "test-outgoing";
  scenarioId?: string;
  stage?: number;
  categoryId?: string;
  categoryEn?: string;
  captionId?: string;
  captionEn?: string;
  descriptionId?: string;
  descriptionEn?: string;
  sourceId?: string;
  sourceEn?: string;
  image: string;
};

export const sikomanDesignArtifacts: ProjectArtifact[] = [
  { id: "activity-login", kind: "activity", titleId: "Activity Diagram Login", titleEn: "Login Activity Diagram", page: 27, image: "/projects/sikoman-activity-login.png" },
  { id: "activity-register", kind: "activity", titleId: "Activity Diagram Daftar Akun", titleEn: "Account Registration Activity Diagram", page: 28, image: "/projects/sikoman-activity-register.png" },
  { id: "activity-view-commodity", kind: "activity", titleId: "Activity Diagram Lihat Informasi Komoditas", titleEn: "View Commodity Information Activity Diagram", page: 30, image: "/projects/sikoman-activity-view-commodity.png" },
  { id: "activity-manage-commodity", kind: "activity", titleId: "Activity Diagram Kelola Komoditas", titleEn: "Manage Commodities Activity Diagram", page: 32, image: "/projects/sikoman-activity-manage-commodity.png" },
  { id: "activity-manage-types", kind: "activity", titleId: "Activity Diagram Kelola Jenis dan Varietas", titleEn: "Manage Types and Varieties Activity Diagram", page: 35, image: "/projects/sikoman-activity-manage-types.png" },
  { id: "activity-manage-products", kind: "activity", titleId: "Activity Diagram Kelola Produk Olahan", titleEn: "Manage Processed Products Activity Diagram", page: 37, image: "/projects/sikoman-activity-manage-products.png" },
  { id: "activity-manage-users", kind: "activity", titleId: "Activity Diagram Kelola User", titleEn: "Manage Users Activity Diagram", page: 39, image: "/projects/sikoman-activity-manage-users.png" },
  { id: "activity-forum", kind: "activity", titleId: "Activity Diagram Forum Diskusi", titleEn: "Discussion Forum Activity Diagram", page: 41, image: "/projects/sikoman-activity-forum.png" },
  { id: "activity-rating", kind: "activity", titleId: "Activity Diagram Rating", titleEn: "Rating Activity Diagram", page: 42, image: "/projects/sikoman-activity-rating.png" },
  { id: "activity-reports", kind: "activity", titleId: "Activity Diagram Laporan", titleEn: "Reports Activity Diagram", page: 44, image: "/projects/sikoman-activity-reports.png" },
  { id: "sequence-login", kind: "sequence", titleId: "Sequence Diagram Login", titleEn: "Login Sequence Diagram", page: 63, image: "/projects/sikoman-sequence-login.png" },
  { id: "sequence-register", kind: "sequence", titleId: "Sequence Diagram Daftar Akun", titleEn: "Account Registration Sequence Diagram", page: 64, image: "/projects/sikoman-sequence-register.png" },
  { id: "sequence-view-commodity", kind: "sequence", titleId: "Sequence Diagram Lihat Informasi Komoditas", titleEn: "View Commodity Information Sequence Diagram", page: 64, image: "/projects/sikoman-sequence-view-commodity.png" },
  { id: "sequence-manage-commodity", kind: "sequence", titleId: "Sequence Diagram Kelola Komoditas", titleEn: "Manage Commodities Sequence Diagram", page: 65, image: "/projects/sikoman-sequence-manage-commodity.png" },
  { id: "sequence-manage-users", kind: "sequence", titleId: "Sequence Diagram Kelola User", titleEn: "Manage Users Sequence Diagram", page: 66, image: "/projects/sikoman-sequence-manage-users.png" },
  { id: "sequence-forum", kind: "sequence", titleId: "Sequence Diagram Forum", titleEn: "Forum Sequence Diagram", page: 67, image: "/projects/sikoman-sequence-forum.png" },
  { id: "sequence-rating", kind: "sequence", titleId: "Sequence Diagram Rating", titleEn: "Rating Sequence Diagram", page: 68, image: "/projects/sikoman-sequence-rating.png" },
  { id: "sequence-reports", kind: "sequence", titleId: "Sequence Diagram Laporan", titleEn: "Reports Sequence Diagram", page: 69, image: "/projects/sikoman-sequence-reports.png" },
];

export const sipaktDesignArtifacts: ProjectArtifact[] = [
  { id: "use-case", kind: "use-case", titleId: "Use Case Diagram SIPAKT", titleEn: "SIPAKT Use Case Diagram", figure: "2.1", image: "/projects/sipakt-use-case.jpg" },
  { id: "activity-login", kind: "activity", titleId: "Activity Diagram Login", titleEn: "Login Activity Diagram", figure: "2.2", image: "/projects/sipakt-activity-login.jpg" },
  { id: "activity-items", kind: "activity", titleId: "Activity Diagram Kelola Data Barang", titleEn: "Manage Item Data Activity Diagram", figure: "2.3", image: "/projects/sipakt-activity-item.jpg" },
  { id: "activity-orders", kind: "activity", titleId: "Activity Diagram Pemesanan", titleEn: "Orders Activity Diagram", figure: "2.4", image: "/projects/sipakt-activity-orders.jpg" },
  { id: "activity-shipping", kind: "activity", titleId: "Activity Diagram Kelola Data Ekspedisi", titleEn: "Manage Shipping Activity Diagram", figure: "2.5", image: "/projects/sipakt-activity-shipping.jpg" },
  { id: "activity-warehouse", kind: "activity", titleId: "Activity Diagram Kelola Data Gudang", titleEn: "Manage Warehouse Activity Diagram", figure: "2.6", image: "/projects/sipakt-activity-warehouse.jpg" },
  { id: "activity-incoming", kind: "activity", titleId: "Activity Diagram Kelola Barang Masuk", titleEn: "Manage Incoming Goods Activity Diagram", figure: "2.7", image: "/projects/sipakt-activity-inbound.jpg" },
  { id: "activity-outgoing", kind: "activity", titleId: "Activity Diagram Kelola Barang Keluar", titleEn: "Manage Outgoing Goods Activity Diagram", figure: "2.8", image: "/projects/sipakt-activity-outbound.jpg" },
  { id: "activity-users", kind: "activity", titleId: "Activity Diagram Kelola User", titleEn: "Manage Users Activity Diagram", figure: "2.9", image: "/projects/sipakt-activity-users.jpg" },
  { id: "sequence-login", kind: "sequence", titleId: "Sequence Diagram Login", titleEn: "Login Sequence Diagram", figure: "4.1", image: "/projects/sipakt-sequence-login.jpg" },
  { id: "sequence-items", kind: "sequence", titleId: "Sequence Diagram Kelola Data Barang", titleEn: "Manage Item Data Sequence Diagram", figure: "4.2", image: "/projects/sipakt-sequence-items.jpg" },
  { id: "sequence-orders", kind: "sequence", titleId: "Sequence Diagram Pemesanan", titleEn: "Orders Sequence Diagram", figure: "4.3", image: "/projects/sipakt-sequence-orders.jpg" },
  { id: "sequence-shipping", kind: "sequence", titleId: "Sequence Diagram Kelola Ekspedisi", titleEn: "Manage Shipping Sequence Diagram", figure: "4.4", image: "/projects/sipakt-sequence-shipping.jpg" },
  { id: "sequence-warehouse", kind: "sequence", titleId: "Sequence Diagram Kelola Data Gudang", titleEn: "Manage Warehouse Sequence Diagram", figure: "4.5", image: "/projects/sipakt-sequence-warehouse.jpg" },
  { id: "sequence-incoming", kind: "sequence", titleId: "Sequence Diagram Kelola Barang Masuk", titleEn: "Manage Incoming Goods Sequence Diagram", figure: "4.6", image: "/projects/sipakt-sequence-inbound.jpg" },
  { id: "sequence-outgoing", kind: "sequence", titleId: "Sequence Diagram Kelola Barang Keluar", titleEn: "Manage Outgoing Goods Sequence Diagram", figure: "4.7", image: "/projects/sipakt-sequence-outbound.jpeg" },
  { id: "sequence-users", kind: "sequence", titleId: "Sequence Diagram Kelola User", titleEn: "Manage Users Sequence Diagram", figure: "4.8", image: "/projects/sipakt-sequence-users.jpg" },
];

export const sipaktImplementationArtifacts: ProjectArtifact[] = [
  { id: "ui-login", kind: "interface", group: "account", titleId: "Login Admin dan Petugas", titleEn: "Admin and Staff Login", figure: "5.1", image: "/projects/sipakt-impl-5-1-login.png" },
  { id: "ui-dashboard-admin", kind: "interface", group: "dashboard", titleId: "Dashboard Admin", titleEn: "Admin Dashboard", figure: "5.2", image: "/projects/sipakt-impl-5-2-dashboard-admin.png" },
  { id: "ui-items-admin", kind: "interface", group: "items", titleId: "Kelola Data Barang (Admin)", titleEn: "Manage Item Data (Admin)", figure: "5.3", image: "/projects/sipakt-impl-5-3-items-admin.png" },
  { id: "ui-add-item-admin", kind: "interface", group: "items", titleId: "Tambah Barang (Admin)", titleEn: "Add Item (Admin)", figure: "5.4", image: "/projects/sipakt-impl-5-4-add-item-admin.png" },
  { id: "ui-edit-item-admin", kind: "interface", group: "items", titleId: "Edit Barang (Admin)", titleEn: "Edit Item (Admin)", figure: "5.5", image: "/projects/sipakt-impl-5-5-edit-item-admin.png" },
  { id: "ui-orders-admin", kind: "interface", group: "orders", titleId: "Pemesanan (Admin)", titleEn: "Orders (Admin)", figure: "5.6", image: "/projects/sipakt-impl-5-6-orders-admin.png" },
  { id: "ui-add-order-admin", kind: "interface", group: "orders", titleId: "Tambah Pemesanan (Admin)", titleEn: "Add Order (Admin)", figure: "5.7", image: "/projects/sipakt-impl-5-7-add-order-admin.png" },
  { id: "ui-shipping-admin", kind: "interface", group: "shipping", titleId: "Kelola Data Ekspedisi (Admin)", titleEn: "Manage Shipping Data (Admin)", figure: "5.8", image: "/projects/sipakt-impl-5-8-shipping-admin.png" },
  { id: "ui-add-shipping-admin", kind: "interface", group: "shipping", titleId: "Tambah Data Ekspedisi (Admin)", titleEn: "Add Shipping Data (Admin)", figure: "5.9", image: "/projects/sipakt-impl-5-9-add-shipping-admin.png" },
  { id: "ui-edit-shipping-admin", kind: "interface", group: "shipping", titleId: "Edit Data Ekspedisi (Admin)", titleEn: "Edit Shipping Data (Admin)", figure: "5.10", image: "/projects/sipakt-impl-5-10-edit-shipping-admin.png" },
  { id: "ui-warehouse-admin", kind: "interface", group: "warehouse", titleId: "Kelola Data Gudang (Admin)", titleEn: "Manage Warehouse Data (Admin)", figure: "5.11", image: "/projects/sipakt-impl-5-11-warehouse-admin.png" },
  { id: "ui-add-warehouse-admin", kind: "interface", group: "warehouse", titleId: "Tambah Data Gudang (Admin)", titleEn: "Add Warehouse Data (Admin)", figure: "5.12", image: "/projects/sipakt-impl-5-12-add-warehouse-admin.png" },
  { id: "ui-edit-warehouse-admin", kind: "interface", group: "warehouse", titleId: "Edit Data Gudang (Admin)", titleEn: "Edit Warehouse Data (Admin)", figure: "5.13", image: "/projects/sipakt-impl-5-13-edit-warehouse-admin.png" },
  { id: "ui-incoming-admin", kind: "interface", group: "incoming", titleId: "Kelola Barang Masuk (Admin)", titleEn: "Manage Incoming Goods (Admin)", figure: "5.14", image: "/projects/sipakt-impl-5-14-incoming-admin.png" },
  { id: "ui-add-incoming-admin", kind: "interface", group: "incoming", titleId: "Tambah Barang Masuk (Admin)", titleEn: "Add Incoming Goods (Admin)", figure: "5.15", image: "/projects/sipakt-impl-5-15-add-incoming-admin.png" },
  { id: "ui-outgoing-admin-staff", kind: "interface", group: "outgoing", titleId: "Kelola Barang Keluar (Admin dan Petugas)", titleEn: "Manage Outgoing Goods (Admin and Staff)", figure: "5.16", image: "/projects/sipakt-impl-5-16-outgoing-admin-staff.png" },
  { id: "ui-add-outgoing-admin-staff", kind: "interface", group: "outgoing", titleId: "Tambah Barang Keluar (Admin dan Petugas)", titleEn: "Add Outgoing Goods (Admin and Staff)", figure: "5.17", image: "/projects/sipakt-impl-5-17-add-outgoing-admin-staff.png" },
  { id: "ui-users-admin", kind: "interface", group: "users", titleId: "Kelola User (Admin)", titleEn: "Manage Users (Admin)", figure: "5.18", image: "/projects/sipakt-impl-5-18-users-admin.png" },
  { id: "ui-add-user-admin", kind: "interface", group: "users", titleId: "Tambah User (Admin)", titleEn: "Add User (Admin)", figure: "5.19", image: "/projects/sipakt-impl-5-19-add-user-admin.png" },
];

export const sipaktTestingArtifacts: ProjectArtifact[] = [
  { id: "test-login", kind: "test", group: "test-login", titleId: "Tabel Pengujian Login", titleEn: "Login Test Table", figure: "6.2", image: "/projects/sipakt-test-table-6-2-login.svg" },
  { id: "test-items", kind: "test", group: "test-items", titleId: "Tabel Pengujian Kelola Data Barang", titleEn: "Manage Item Data Test Table", figure: "6.3", image: "/projects/sipakt-test-table-6-3-items.svg" },
  { id: "test-orders", kind: "test", group: "test-orders", titleId: "Tabel Pengujian Pemesanan", titleEn: "Orders Test Table", figure: "6.4", image: "/projects/sipakt-test-table-6-4-orders.svg" },
  { id: "test-shipping", kind: "test", group: "test-shipping", titleId: "Tabel Pengujian Kelola Data Ekspedisi", titleEn: "Manage Shipping Data Test Table", figure: "6.5", image: "/projects/sipakt-test-table-6-5-shipping.svg" },
  { id: "test-warehouse", kind: "test", group: "test-warehouse", titleId: "Tabel Pengujian Kelola Data Gudang", titleEn: "Manage Warehouse Data Test Table", figure: "6.6", image: "/projects/sipakt-test-table-6-6-warehouse.svg" },
  { id: "test-incoming", kind: "test", group: "test-incoming", titleId: "Tabel Pengujian Kelola Barang Masuk", titleEn: "Manage Incoming Goods Test Table", figure: "6.7", image: "/projects/sipakt-test-table-6-7-incoming.svg" },
  { id: "test-outgoing", kind: "test", group: "test-outgoing", titleId: "Tabel Pengujian Kelola Barang Keluar", titleEn: "Manage Outgoing Goods Test Table", figure: "6.8", image: "/projects/sipakt-test-table-6-8-outgoing.svg" },
  { id: "test-users", kind: "test", group: "test-user", titleId: "Tabel Pengujian Kelola User", titleEn: "Manage Users Test Table", figure: "6.9", image: "/projects/sipakt-test-table-6-9-users.svg" },
];

export const sikomanImplementationArtifacts: ProjectArtifact[] = [
  { id: "ui-register", kind: "interface", group: "account", titleId: "Daftar Akun", titleEn: "Account Registration", figure: "5.1", image: "/projects/sikoman-ui-register.png" },
  { id: "ui-login", kind: "interface", group: "account", titleId: "Login", titleEn: "Login", figure: "5.2", image: "/projects/sikoman-ui-login.png" },
  { id: "ui-commodity-detail-guest", kind: "interface", group: "commodity", titleId: "Detail Komoditas Guest", titleEn: "Guest Commodity Details", figure: "5.4", image: "/projects/sikoman-ui-commodity-detail-guest.png" },
  { id: "ui-commodities-member", kind: "interface", group: "commodity", titleId: "Halaman Komoditas Member", titleEn: "Member Commodity List", figure: "5.5", image: "/projects/sikoman-ui-commodities-member.png" },
  { id: "ui-commodity-member-detail-rating", kind: "interface", group: "commodity", titleId: "Detail Komoditas Member dan Rating", titleEn: "Member Commodity Details and Rating", figure: "5.6 dan 5.21", image: "/projects/sikoman-ui-commodity-member-detail-rating.png" },
  { id: "ui-manage-commodities", kind: "interface", group: "management", titleId: "Kelola Komoditas", titleEn: "Manage Commodities", figure: "5.7", image: "/projects/sikoman-ui-manage-commodities.png" },
  { id: "ui-add-commodity", kind: "interface", group: "management", titleId: "Tambah Komoditas", titleEn: "Add Commodity", figure: "5.8", image: "/projects/sikoman-ui-add-commodity.png" },
  { id: "ui-edit-commodity", kind: "interface", group: "management", titleId: "Edit Komoditas", titleEn: "Edit Commodity", figure: "5.9", image: "/projects/sikoman-ui-edit-commodity.png" },
  { id: "ui-manage-types-varieties", kind: "interface", group: "management", titleId: "Kelola Jenis dan Varietas", titleEn: "Manage Types and Varieties", figure: "5.10", image: "/projects/sikoman-ui-manage-types-varieties.png" },
  { id: "ui-add-types-varieties", kind: "interface", group: "management", titleId: "Tambah Jenis dan Varietas", titleEn: "Add Types and Varieties", figure: "5.11", image: "/projects/sikoman-ui-add-types-varieties.png" },
  { id: "ui-edit-types-varieties", kind: "interface", group: "management", titleId: "Edit Jenis dan Varietas", titleEn: "Edit Types and Varieties", figure: "5.12", image: "/projects/sikoman-ui-edit-types-varieties.png" },
  { id: "ui-manage-products", kind: "interface", group: "management", titleId: "Kelola Produk Olahan", titleEn: "Manage Processed Products", figure: "5.13", image: "/projects/sikoman-ui-manage-products.png" },
  { id: "ui-add-product", kind: "interface", group: "management", titleId: "Tambah Produk Olahan", titleEn: "Add Processed Product", figure: "5.14", image: "/projects/sikoman-ui-add-product.png" },
  { id: "ui-edit-product", kind: "interface", group: "management", titleId: "Edit Produk Olahan", titleEn: "Edit Processed Product", figure: "5.15", image: "/projects/sikoman-ui-edit-product.png" },
  { id: "ui-manage-users", kind: "interface", group: "management", titleId: "Kelola User", titleEn: "Manage Users", figure: "5.16", image: "/projects/sikoman-ui-manage-users.png" },
  { id: "ui-add-user", kind: "interface", group: "management", titleId: "Tambah User", titleEn: "Add User", figure: "5.17", image: "/projects/sikoman-ui-add-user.png" },
  { id: "ui-edit-user", kind: "interface", group: "management", titleId: "Edit User", titleEn: "Edit User", figure: "5.18", image: "/projects/sikoman-ui-edit-user.png" },
  { id: "ui-forum", kind: "interface", group: "community", titleId: "Forum", titleEn: "Discussion Forum", figure: "5.19", image: "/projects/sikoman-ui-forum.png" },
  { id: "ui-add-forum", kind: "interface", group: "community", titleId: "Tambah Forum", titleEn: "Create Forum", figure: "5.20", image: "/projects/sikoman-ui-add-forum.png" },
  { id: "ui-reports", kind: "interface", group: "reports", titleId: "Laporan", titleEn: "Reports", figure: "5.22", image: "/projects/sikoman-ui-reports.png" },
];

export const sikomanTestingArtifacts: ProjectArtifact[] = [
  { id: "test-1b", kind: "test", group: "test-register", titleId: "PDHUPL-1.b - Daftar Akun", titleEn: "PDHUPL-1.b - Account Registration", scenarioId: "PDHUPL-1.b", image: "/projects/sikoman-test-scenario-1b.png" },
  { id: "test-1c", kind: "test", group: "test-register", titleId: "PDHUPL-1.c - Daftar Akun", titleEn: "PDHUPL-1.c - Account Registration", scenarioId: "PDHUPL-1.c", image: "/projects/sikoman-test-scenario-1c.png" },
  { id: "test-1d", kind: "test", group: "test-register", titleId: "PDHUPL-1.d - Daftar Akun", titleEn: "PDHUPL-1.d - Account Registration", scenarioId: "PDHUPL-1.d", image: "/projects/sikoman-test-scenario-1d.png" },
  { id: "test-2a", kind: "test", group: "test-login", titleId: "PDHUPL-2.a - Login", titleEn: "PDHUPL-2.a - Login", scenarioId: "PDHUPL-2.a", image: "/projects/sikoman-test-scenario-2a.png" },
  { id: "test-2b", kind: "test", group: "test-login", titleId: "PDHUPL-2.b - Login", titleEn: "PDHUPL-2.b - Login", scenarioId: "PDHUPL-2.b", image: "/projects/sikoman-test-scenario-2b.png" },
  { id: "test-2c", kind: "test", group: "test-login", titleId: "PDHUPL-2.c - Login", titleEn: "PDHUPL-2.c - Login", scenarioId: "PDHUPL-2.c", image: "/projects/sikoman-test-scenario-2c.png" },
  { id: "test-2d", kind: "test", group: "test-login", titleId: "PDHUPL-2.d - Login", titleEn: "PDHUPL-2.d - Login", scenarioId: "PDHUPL-2.d", image: "/projects/sikoman-test-scenario-2d.png" },
  { id: "test-3a", kind: "test", group: "test-commodity", titleId: "PDHUPL-3.a - Kelola Komoditas", titleEn: "PDHUPL-3.a - Commodity Management", scenarioId: "PDHUPL-3.a", image: "/projects/sikoman-test-scenario-3a.png" },
  { id: "test-3b", kind: "test", group: "test-commodity", titleId: "PDHUPL-3.b - Kelola Komoditas", titleEn: "PDHUPL-3.b - Commodity Management", scenarioId: "PDHUPL-3.b", image: "/projects/sikoman-test-scenario-3b.png" },
  { id: "test-3c", kind: "test", group: "test-commodity", titleId: "PDHUPL-3.c - Kelola Komoditas", titleEn: "PDHUPL-3.c - Commodity Management", scenarioId: "PDHUPL-3.c", image: "/projects/sikoman-test-scenario-3c.png" },
  { id: "test-4a", kind: "test", group: "test-type", titleId: "PDHUPL-4.a - Kelola Jenis Komoditas", titleEn: "PDHUPL-4.a - Commodity Type Management", scenarioId: "PDHUPL-4.a", image: "/projects/sikoman-test-scenario-4a.png" },
  { id: "test-4b", kind: "test", group: "test-type", titleId: "PDHUPL-4.b - Kelola Jenis Komoditas", titleEn: "PDHUPL-4.b - Commodity Type Management", scenarioId: "PDHUPL-4.b", image: "/projects/sikoman-test-scenario-4b.png" },
  { id: "test-5a", kind: "test", group: "test-variety", titleId: "PDHUPL-5.a - Kelola Varietas Komoditas", titleEn: "PDHUPL-5.a - Variety Management", scenarioId: "PDHUPL-5.a", image: "/projects/sikoman-test-scenario-5a.png" },
  { id: "test-5b", kind: "test", group: "test-variety", titleId: "PDHUPL-5.b - Kelola Varietas Komoditas", titleEn: "PDHUPL-5.b - Variety Management", scenarioId: "PDHUPL-5.b", image: "/projects/sikoman-test-scenario-5b.png" },
  { id: "test-6a", kind: "test", group: "test-product", titleId: "PDHUPL-6.a - Kelola Produk Olahan", titleEn: "PDHUPL-6.a - Processed Product Management", scenarioId: "PDHUPL-6.a", image: "/projects/sikoman-test-scenario-6a.png" },
  { id: "test-6b", kind: "test", group: "test-product", titleId: "PDHUPL-6.b - Kelola Produk Olahan", titleEn: "PDHUPL-6.b - Processed Product Management", scenarioId: "PDHUPL-6.b", image: "/projects/sikoman-test-scenario-6b.png" },
  { id: "test-7a", kind: "test", group: "test-user", titleId: "PDHUPL-7.a - Kelola User", titleEn: "PDHUPL-7.a - User Management", scenarioId: "PDHUPL-7.a", image: "/projects/sikoman-test-scenario-7a.png" },
  { id: "test-7b", kind: "test", group: "test-user", titleId: "PDHUPL-7.b - Kelola User", titleEn: "PDHUPL-7.b - User Management", scenarioId: "PDHUPL-7.b", image: "/projects/sikoman-test-scenario-7b.png" },
  { id: "test-7c", kind: "test", group: "test-user", titleId: "PDHUPL-7.c - Kelola User", titleEn: "PDHUPL-7.c - User Management", scenarioId: "PDHUPL-7.c", image: "/projects/sikoman-test-scenario-7c.png" },
  { id: "test-8a", kind: "test", group: "test-forum", titleId: "PDHUPL-8.a - Forum", titleEn: "PDHUPL-8.a - Discussion Forum", scenarioId: "PDHUPL-8.a", image: "/projects/sikoman-test-scenario-8a.png" },
  { id: "test-8b", kind: "test", group: "test-forum", titleId: "PDHUPL-8.b - Forum", titleEn: "PDHUPL-8.b - Discussion Forum", scenarioId: "PDHUPL-8.b", image: "/projects/sikoman-test-scenario-8b.png" },
  { id: "test-8c", kind: "test", group: "test-forum", titleId: "PDHUPL-8.c - Forum", titleEn: "PDHUPL-8.c - Discussion Forum", scenarioId: "PDHUPL-8.c", image: "/projects/sikoman-test-scenario-8c.png" },
  { id: "test-9a", kind: "test", group: "test-report", titleId: "PDHUPL-9.a - Filter Laporan", titleEn: "PDHUPL-9.a - Report Filters", scenarioId: "PDHUPL-9.a", image: "/projects/sikoman-test-scenario-9a.png" },
  { id: "test-9b", kind: "test", group: "test-report", titleId: "PDHUPL-9.b - Filter Laporan", titleEn: "PDHUPL-9.b - Report Filters", scenarioId: "PDHUPL-9.b", image: "/projects/sikoman-test-scenario-9b.png" },
  { id: "test-9c", kind: "test", group: "test-report", titleId: "PDHUPL-9.c - Filter Laporan", titleEn: "PDHUPL-9.c - Report Filters", scenarioId: "PDHUPL-9.c", image: "/projects/sikoman-test-scenario-9c.png" },
  { id: "test-9d", kind: "test", group: "test-report", titleId: "PDHUPL-9.d - Filter Laporan", titleEn: "PDHUPL-9.d - Report Filters", scenarioId: "PDHUPL-9.d", image: "/projects/sikoman-test-scenario-9d.png" },
];
