import { Component,OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  titile = 'app'
  
  @ViewChild('agGrid',{static: true})  agGrid: AgGridAngular

  constructor(private http: HttpClient){  
  }

   columnDefs =[
     {HeaderName:'Make', field : 'make', sortable:true,filter: true,checkboxSelection:true},
     {HeaderName:'Model', field : 'model',sortable:'true'},
     {HeaderName:'Price', field : 'price',sortable:'true'}
   ]

  //  rowData=[
  //    {make: 'test', model: 'cpu', price: 100},
  //    {make: 'Fore', model: 'Monda', price: 3200},
  //    {make: 'Wind', model: 'speed', price: 0.1},   ]
    rowData: any

    ngOnInit() {
      // this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');
      this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
  }

    getSelectedRows(){
      const selectedNodes= this.agGrid.api.getSelectedNodes();
      const selectedData=selectedNodes.map(node => node.data)
      const selectedDataStringPresentation =selectedData.map(node => node.make +' '+node.model).join(',')
      alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }

}