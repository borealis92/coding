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

    public List<Double> averageOfLevels(TreeNode root) {
        List<Double> counts = new ArrayList();
        List<Double> sums = new ArrayList(); 
        findLevels(root, 0, counts, sums);
        List<Double> average = new ArrayList();
        for(int i = 0; i < counts.size(); i++){
            average.add(sums.get(i)/counts.get(i));
         }
        return average;
            
    }
    
    public void findLevels(TreeNode node, int depth, List<Double> counts, List<Double> sums){
        if(node == null){
            return;
        }
        if(counts.size() <= depth){
            counts.add(0.0);
            sums.add(0.0);
        }
        sums.set(depth, sums.get(depth) + node.val);
        counts.set(depth, counts.get(depth) + 1);
        findLevels(node.left,depth+1, counts, sums);
        findLevels(node.right,depth+1, counts, sums);
    }
}