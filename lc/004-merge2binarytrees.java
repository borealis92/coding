/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
        return sumNodes(t1,t2);
        
    }
    public TreeNode sumNodes(TreeNode t1, TreeNode t2){
        
        if(t1 == null && t2 == null){
            return null;
        }
        TreeNode x = null;
        if(t1 == null){
            x = new TreeNode(t2.val);
            x.left = sumNodes(null, t2.left);
            x.right = sumNodes(null, t2.right);
        }
        else if(t2 == null){
            x = new TreeNode(t1.val);
            x.left = sumNodes(t1.left, null);
            x.right = sumNodes(t1.right, null);
        }
        else{
            x = new TreeNode(t1.val + t2.val);
            x.left = sumNodes(t1.left, t2.left);
            x.right = sumNodes(t1.right, t2.right);
        }
        return x;
    }
}