import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface TreeNode {
  name: string;
  route: string;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: "住宿",
    route: "pet-boarding",
    children: [
      {
        name: "預約",
        route: "reservation",
      },
      {
        name: "房客",
        route: "tenant",
      },
    ]
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  constructor() {
    TREE_DATA.forEach(node => this.addFullRoute(node, ''));
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  addFullRoute(node: TreeNode, parentRoute: string) {
    // 將父路由加到節點的路由前
    node.route = parentRoute + '/' + node.route;
    if (node.children) {
      // 如果有子節點，遞歸處理子節點
      node.children.forEach(childNode => this.addFullRoute(childNode, node.route));
    }
  }
}
