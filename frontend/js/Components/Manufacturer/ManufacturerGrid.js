Ext.define('PartDB2.ManufacturerGrid', {
	extend: 'PartDB2.EditorGrid',
	alias: 'widget.ManufacturerGrid',
	columns: [
	          {header: i18n("Manufacturer"),  dataIndex: 'name', flex: 1}
	          ],
	addButtonText: i18n("Add Manufacturer"),
    deleteButtonText: i18n("Delete Manufacturer")
});