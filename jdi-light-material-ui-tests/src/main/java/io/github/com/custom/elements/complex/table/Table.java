package io.github.com.custom.elements.complex.table;

import com.epam.jdi.light.asserts.generic.HasAssert;
import com.epam.jdi.light.elements.complex.table.BaseTable;
import io.github.com.custom.asserts.TableAssert;

public class Table extends BaseTable<Table, TableAssert>  implements HasAssert<TableAssert> {

    public TableAssert is() {
        return new TableAssert().set(this);
    }
}
